from bs4 import BeautifulSoup
import requests
import re
import json
lapham = "https://www.laphamcompany.com/properties-available"
r = requests.get(lapham)

bs = BeautifulSoup(r.content)


x = bs.find_all("h4", class_="grid-offer-title")
z = []
for y in x:
    z.append(y.find('a'))


apartments = {}
for b in z:
    if (b is not None):
        x = {}
        link = "https://www.laphamcompany.com" + b['href']
        r_l = requests.get(link)
        bs2 = BeautifulSoup(r_l.content)
        for c in bs2.find_all("div", class_ = "views-field"):
            if (re.findall("Bedrooms(.*)", c.text) != []):
                x["bedrooms"] = re.findall("Bedrooms(.*)", c.text)
            if (re.findall("Bathrooms(.*)", c.text) != []):  
                x["bathrooms"] = re.findall("Bathrooms(.*)", c.text)
            if (re.findall("Rent(.*)", c.text) != []):
                x["rent"] = re.findall("Rent(.*)", c.text)
        apartments[b.text] = x

    

with open('listings.json', 'w') as out:
    json.dump(apartments, out)
    out.write('\n')