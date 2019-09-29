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
import aiohttp

from bs4 import BeautifulSoup

sites = ['https://mangakakalot.com']
mangaLinks = []
mangaChapterLinks = []
siteMaps = []
botName = 'MangaLinkCollectorBot'
header = {'User-Agent' : botName}
db = pymongo.MongoClient().mangabois
# db = pymongo.MongoClient("mongodb://localhost:27017").mangabois


async def fetch(url):
    connector = aiohttp.TCPConnector(limit=50)
    async with aiohttp.ClientSession(connector=connector) as session:
        async with session.get(url) as response:
            return await response.text()


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
            # request = urllib.request.Request(xml, headers=header)
            # xmlFile = urllib.request.urlopen(request)
            xmlFile = await fetch(xml)
            parsedXml = BeautifulSoup(xmlFile, 'xml')
            # mangaLinks.append(link)

            curr_manga = None
            chapters = []
            for location in parsedXml.find_all('loc'):
                link = location.contents[0]
                # print(link)

                if link.endswith('.xml'):
                    siteMaps.append(link)
                else:
                    if curr_manga is None and 'chapter' not in link:
                        curr_manga = link
                    if 'chapter' in link:
                        # print(link)
                        chapters.append(link)
                    elif 'chapter' not in link and curr_manga is not None and link != curr_manga:
                        # print(curr_manga, chapters)

                        await parse(curr_manga, chapters)
                        chapters.clear()
                        curr_manga = link
                        print(curr_manga)

                        
  
                    
    
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
    # resp = await requests.get(link)
    # txt = resp.text
    txt = await fetch(link)
    soup = BeautifulSoup(txt, 'lxml')
    images = soup.find_all('img')
    pages = []
    for index, image in enumerate(images):
        if 'chapter' in image['src']:
            page = {'num': index, 'link': image['src']}
            pages.append(page)
    # print(pages)
    return pages

async def get_manga_info(info_url):
    data = {}
    # resp = requests.get(info_url)
    # txt = resp.text
    txt = await fetch(info_url)
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

async def insertChapters(chapter):
    chapter_ids = []
    count = db.chapters.count_documents({'manga': {'name': chapter['manga']['name']}, 'num': chapter['num']})
    if count is 0:
        chapter_id = db.chapters.insert_one(chapter).inserted_id
        chapter_ids.append(chapter_id)
        print('just inserted a chapter')
    return chapter_ids

async def insertManga(manga):
    count = db.mangas.count_documents({'name': manga['name']})
    if count is 0:
        db.mangas.insert_one(manga)
        print(f"Just inserted: {manga['name']}")

async def parse(currManga, chapters):
    chapter_nums = []
    manga_name = currManga.rsplit('/')[4]
    manga_name = manga_name.replace('_', ' ')
    manga = await get_manga_info(currManga)
    if manga is not None:
        tasks = []
        for link in chapters:
            task = asyncio.create_task(getPages(link))
            tasks.append(task)
        result_chapters = await asyncio.gather(*tasks)

        for link in chapters:
            m = re.search("chapter_(.*)", link)
            currNum = float(m.group(1))
            chapter_nums.append(currNum)

        chapter_tasks = []
        for index, pages in enumerate(result_chapters): 
            if len(pages) > 0:
                chapter = {'num': chapter_nums[index], 'pages': pages, 'manga': {'name': manga_name}}
                task = asyncio.create_task(insertChapters(chapter))
                chapter_tasks.append(task)  
        chapter_ids = await asyncio.gather(*chapter_tasks)

        chapters = []
        for index, chapter_id in enumerate(chapter_ids):
            if chapter_id is not None:
                try:
                    chapter = {'num': chapter_nums[index], 'chapterId': chapter_id}
                    chapters.append(chapter)
                except:
                    print('This chapter was already inserted.')
        manga['chapters'] = chapters
        await insertManga(manga)


# asyncio.run(crawl())
loop = asyncio.ProactorEventLoop() # for subprocess' pipes on Windows
asyncio.set_event_loop(loop)
loop.run_until_complete(crawl())
# y = json.dumps({'manga': mangaLinks}, indent=3)
# print(y)