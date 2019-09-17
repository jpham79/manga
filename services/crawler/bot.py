import urllib.request
import urllib.parse
import urllib.robotparser

###
import requests
import re
import json
from pymongo import MongoClient
###

import time

from bs4 import BeautifulSoup

sites = ['https://mangakakalot.com']
mangaLinks = []
mangaChapterLinks = []
siteMaps = []
botName = 'MangaLinkCollectorBot'
header = {'User-Agent' : botName}

"""
 Will only be checking for sitemaps,
 disallow and allow rule parsing will be directed to urllib.robotpaser
"""
def crawl():

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
            for location in parsedXml.find_all('loc'):
                link = location.contents[0]
                # print(link)
                if link.endswith('.xml'):
                    siteMaps.append(link)
                else:
                    # mangaLinks.append(link)
                    if 'chapter' in link:
                        mangaChapterLinks.append(link)
                    else:
                        if get_manga_info(link) is not None:
                            mangaLinks.append(get_manga_info(link))
                        #if stop == 3:
                            #y = json.dumps({'manga': mangaLinks}, indent=3)
                            #print(y)
                            #exit()
                            #return
                        #stop = stop + 1
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
            genres_arr.append(genre.text)
        data['genres'] = genres_arr

        # alt title of manga
        alt_title = soup.findAll('h2')
        if len(alt_title[0].text.split(';')) > 1:
            if alt_title[0].text.split(';')[1].strip().isascii():
                data['otherNames'] = alt_title[0].text.split(';')[1].strip()
        
        return data
crawl()
y = json.dumps({'manga': mangaLinks}, indent=3)
print(y)