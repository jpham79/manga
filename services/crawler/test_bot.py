import requests
import re
from bs4 import BeautifulSoup
import json

data = {}
chapter = {}

resp = requests.get('https://mangakakalot.com/manga/yume_maboroshi_no_gotoku')
txt = resp.text
soup = BeautifulSoup(txt, 'lxml')
myul = soup.findAll('ul', {'class': 'manga-info-text'})

# title of manga
# title = soup.findAll('h1')
# print(title[0].text)
url = 'https://mangakakalot.com/manga/yume_maboroshi_no_gotoku'
manga_name = url.rsplit('/')[4]
manga_name = manga_name.replace('_', ' ')
data['name'] = manga_name


#data['name'] = title[0].text

# image
manga_image = soup.select('div.manga-info-pic img[src]')
# for image in manga_image:
    # print(image['src'])
data['image'] = manga_image[0]['src']

# author
authors = soup.findAll(href = re.compile('search_author'))
# for author in authors:
    # print(author.text)
data['author'] = authors[0].text

# status
status = soup.findAll(text = re.compile('Status'))
# print(status[0].split(':')[1].strip())
if status[0].split(':')[1].strip() == 'Ongoing':
    data['ongoing'] = True
else:
    data['ongoing'] = False

# genres
genres = myul[0].findAll('li')
genres = genres[6].findAll('a')
genres_arr = []
for genre in genres:
    # print(genre.text)
    genres_arr.append(genre.text)
data['genres'] = genres_arr

# alt title of manga
alt_title = soup.findAll('h2')
#print(alt_title[0].text.split(';')[1].strip())
data['otherNames'] = alt_title[0].text.split(';')[1].strip()

resp = requests.get('https://mangakakalot.com/chapter/yume_maboroshi_no_gotoku/chapter_1')
txt = resp.text
soup = BeautifulSoup(txt, 'lxml')

# chapter number
url = 'https://mangakakalot.com/chapter/yume_maboroshi_no_gotoku/chapter_1'

manga_name = url.rsplit('/')[4]
manga_name = manga_name.replace('_', ' ')
manga_name_obj = {}
manga_name_obj['name'] = manga_name
# chapter['manga'] = manga_name
chapter['manga'] = manga_name_obj

chapter_num = url.rsplit('_', 1)[1]
chapter['num'] = chapter_num
  
# pages
pages = soup.findAll('div', {'class': 'vung-doc'})
pages = pages[0].findAll('img')
pages_arr = []
count = 1
for page in pages:
    pages_arr.append({'num': count, 'url': page['src']})
    count = count + 1
chapter['pages'] = pages_arr

#print(chapter)
#print(data)

print(json.dump(chapter))