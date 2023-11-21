import requests_html
from requests_html import HTMLSession
import json

def parse_data(text, info_texts):
    faculty_data = {}
    lines = text.split("\n")
    iterator = iter(lines)
    
    try:
        faculty_data["Name"] = info_texts[0]
        faculty_data["Title"] = info_texts[1]
        
        for line in iterator:
            line = line.strip()
            if not line:
                break
            key, _, value = line.partition(":")
            if key in ["Office", "Phone", "Email", "Personal Website", "Research Groups"]:
                faculty_data[key] = value.strip()
                
    except StopIteration:
        pass
    
    return faculty_data

prof_websites = ['https://www.cs.emory.edu/people/faculty/individual.php?NUM=350','https://www.cs.emory.edu/people/faculty/individual.php?NUM=17']

all_faculty_data = []

for website in prof_websites:
    s = HTMLSession()
    r = s.get(website)
    name = r.html.find('h2', first=True)

    info_texts = []
    info_texts.append(name.text)

    info = r.html.find('td')
    for element in info:
        info_texts.append(element.text)
        
    test_text = '\n'.join([item.text for item in info])
    
    faculty_data = parse_data(test_text, info_texts)
    
    all_faculty_data.append(faculty_data)

json_object = json.dumps(all_faculty_data, indent=4)

with open("ProfessorSample.json", "w") as outfile:
    outfile.write(json_object)
