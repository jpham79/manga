import urllib.request
from bs4 import BeautifulSoup


sites = ['https://mangakakalot.com']
allowedPages = []
disallowedPages = []
data = []
header = {'User-Agent' : 'MangaLinkCollectorBot (WIP)'}

for page in sites:
    request = urllib.request.Request(page + '/robots.txt', headers=header)
    response = urllib.request.urlopen(request);
    for line in response:
        print(line)
##    soup = BeautifulSoup(html, 'html.parser');
##    for link in soup.find_all('a'):
##        print(link.get('href'))
    
