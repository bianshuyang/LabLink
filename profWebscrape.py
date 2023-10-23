import requests_html
import csv
from requests_html import HTMLSession

s = HTMLSession()
r = s.get('https://www.cs.emory.edu/people/faculty/individual.php?NUM=350')
name = r.html.find('h2', first=True)
title = r.html.find('td', first=True)
print(name.text)
print(title.text)

