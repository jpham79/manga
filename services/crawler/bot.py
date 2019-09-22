import urllib.request
import urllib.parse
import urllib.robotparser

###
import requests
import re
import json
import pymongo
###

import time
import asyncio

from bs4 import BeautifulSoup

sites = ['https://mangakakalot.com']
mangaLinks = []
mangaChapterLinks = []
siteMaps = []
botName = 'MangaLinkCollectorBot'
header = {'User-Agent' : botName}
db = pymongo.MongoClient().mangabois

"""
 Will only be checking for sitemaps,
 disallow and allow rule parsing will be directed to urllib.robotpaser
"""
async def crawl():

    stop = 0

    for page in sites:
        request = urllib.request.Request(page + '/robots.txt', headers=header)
        response = urllib.request.urlopen(request)
        parse_sitemap(response.read().decode("utf-8").splitlines())

        robotParser = urllib.robotparser.RobotFileParser(page + '/robots.txt')
        robotParser.read()
        requestRate = robotParser.request_rate(botName)
        if requestRate is None:
            requestRate = robotParser.request_rate("*")
        
        for xml in siteMaps:
            request = urllib.request.Request(xml, headers=header)
            xmlFile = urllib.request.urlopen(request)
            parsedXml = BeautifulSoup(xmlFile, 'xml')
            # mangaLinks.append(link)
            bulkChapters = []
            chapterNums = []
            manga = {}
            prevNum = -1
            for location in parsedXml.find_all('loc'):
                link = location.contents[0]
                # print(link)

                if link.endswith('.xml'):
                    siteMaps.append(link)
                else:
  
  
                    if 'chapter' in link:
                        mangaChapterLinks.append(link)
                        # print(link)
                        # fuck this manga tho, so i skipped it. it's like hella chapters long
                        if 'yume_maboroshi' not in link:
                            mangaName = link.rsplit('/')[4]
                            mangaName = mangaName.replace('_', ' ')
                            m = re.search("chapter_(.*)", link)
                            currNum = float(m.group(1))
                            # print(currNum)
                            # print(prevNum)

                            # This checks if we have moved on to another manga
                            # this was done before i started grabbing manga name
                            if currNum > prevNum:
                                chapter = {'num': currNum, 'pages': getPages(link), 'manga': {'name': mangaName}}
                                bulkChapters.append(chapter)
                                chapterNums.append(currNum)
                                prevNum = currNum
                                # getPages(link)
                                # print(chapter)
                            else:
                                # Once we have all the chapters for a manga we go ahead and batch insert them into the db
                                chapters = []

                                # If the insert succeeds, it returns a list of objectids we can use to reference the chapters from
                                # chapterIds = db.chapters.insert_many(bulkChapters).inserted_ids
                                chapterIds = []
                                for chapter in bulkChapters:
                                    count = db.chapters.count_documents({'manga': {'name': chapter['manga']['name']}, 'num': chapter['num']})
                                    if count is 0:
                                        chapterId = db.chapters.insert_one(chapter).inserted_id
                                        chapterIds.append(chapterId)

                                # Creating the chapter object to attach to the manga object which we will later insert
                                for i in range(0, len(chapterIds)):
                                    formattedChapter = {'num': chapterNums[i], 'chapterId': chapterIds[i]}
                                    chapters.append(formattedChapter)
                                manga['chapters'] = chapters

                                # clearing the slate and starting over for the next manga
                                bulkChapters.clear()
                                chapterNums.clear()
                                prevNum = -1
                                # don't forget to append the manga chapter that failed the condition to a new array
                                chapter = {'num': currNum, 'pages': getPages(link), 'manga': {'name': mangaName}}
                                bulkChapters.append(chapter)
                                chapterNums.append(currNum)
                    else:
                        # If the chapter is not in the link, we know it is the landing page, so we grab metadata here
                        if get_manga_info(link) is not None:
                            # mangaLinks.append(get_manga_info(link))
                            if 'yume_maboroshi' not in link:
                                print(get_manga_info(link))
                                manga = get_manga_info(link)

                    # If the chapters have been inserted into the database
                    # We will insert the manga here with the reference to the ids
                    if 'chapters' in manga:
                        count = db.mangas.count_documents({'name': manga['name']})
                        if count is 0:
                            db.mangas.insert_one(manga)
                            print(f"Just inserted: {manga['name']}")
                        # db.mangas.update_one(
                        #     {'name': manga['name']}, 
                        #     {"$set": {
                        #         'chapters': manga['chapters'],
                        #         ''
                        #         }},
                        #     upsert=True)
                        manga = {}
    
            if requestRate:
               time.sleep(requestRate) 
    # print(mangaLinks)
                
def parse_sitemap(response):
    applicable = False
    for line in response:
        x = line.find('#')
        if x >= 0:
            line = line[:x].strip
        if not line:
            continue
        line = line.split(':', 1)
        if len(line) == 2:
            line[0] = line[0].strip().lower()
            line[1] = urllib.parse.unquote(line[1].strip())
            if line[0] == 'user-agent' and (line[1] == '*' or line[1] == botName):
                applicable = True
            if line[0] == 'sitemap' and applicable:
                siteMaps.append(line[1])
                applicable = False

async def getPages(link):
    resp = await requests.get(link)
    txt = resp.text
    soup = BeautifulSoup(txt, 'lxml')
    images = soup.find_all('img')
    pages = []
    for index, image in enumerate(images):
        if 'chapter' in image['src']:
            page = {'num': index, 'link': image['src']}
            pages.append(page)
    # print(pages)
    return pages

def get_manga_info(info_url):
    data = {}
    resp = requests.get(info_url)
    txt = resp.text
    soup = BeautifulSoup(txt, 'lxml')
    myul = soup.findAll('ul', {'class': 'manga-info-text'})

    if len(myul) > 0:
        # name
        manga_name = info_url.rsplit('/')[4]
        manga_name = manga_name.replace('_', ' ')
        data['name'] = manga_name

        # image
        manga_image = soup.select('div.manga-info-pic img[src]')
        data['image'] = manga_image[0]['src']

        # author
        authors = soup.findAll(href = re.compile('search_author'))
        if len(authors) > 0:
            data['author'] = authors[0].text

        # status
        status = soup.findAll(text = re.compile('Status'))
        if status[0].split(':')[1].strip() == 'Ongoing':
            data['ongoing'] = True
        else:
            data['ongoing'] = False

        # genres
        genres = myul[0].findAll('li')
        genres = genres[6].findAll('a')
        genres_arr = []
        for genre in genres:
            genres_arr.append(genre.text.lower())
        data['genres'] = genres_arr

        # alt title of manga
        alt_title = soup.findAll('h2')
        if len(alt_title[0].text.split(';')) > 1:
            if alt_title[0].text.split(';')[1].strip().isascii():
                data['otherNames'] = alt_title[0].text.split(';')[1].strip()
        
        return data

if __name__ == "__main__":
    asyncio.run(crawl())

# y = json.dumps({'manga': mangaLinks}, indent=3)
# print(y)