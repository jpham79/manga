import urllib.request
import urllib.parse
import urllib.robotparser

from bs4 import BeautifulSoup

sites = ['https://mangakakalot.com']
mangaLinks = []
siteMaps = []
botName = 'MangaLinkCollectorBot'
header = {'User-Agent' : botName}

"""
 Will only be checking for sitemaps,
 disallow and allow rule parsing will be directed to urllib.robotpaser
"""
def crawl():
    for page in sites:
        request = urllib.request.Request(page + '/robots.txt', headers=header)
        response = urllib.request.urlopen(request)
        parse_sitemap(response.read().decode("utf-8").splitlines())
        for xml in siteMaps:
            request = urllib.request.Request(xml, headers=header)
            xmlFile = urllib.request.urlopen(request)
            parsedXml = BeautifulSoup(xmlFile, 'xml')
            for location in parsedXml.find_all('loc'):
                link = location.contents[0]
                print(link)
                if link.endswith('.xml'):
                    siteMaps.append(link)
                else:
                    mangaLinks.append(link)
    print(mangaLinks)
                    
                
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
            print(line[1])
            if line[0] == 'user-agent' and (line[1] == '*' or line[1] == botName):
                applicable = True
            if line[0] == 'sitemap' and applicable:
                siteMaps.append(line[1])
                applicable = False

crawl()
                
##    soup = BeautifulSoup(html, 'html.parser')
##    for link in soup.find_all('a'):
##        print(link.get('href'))


    
