import requests_html
import csv
from requests_html import HTMLSession
import json
import re

prof_websites = ['https://www.cs.emory.edu/people/faculty/individual.php?NUM=350','https://www.cs.emory.edu/people/faculty/individual.php?NUM=17']
for website in prof_websites:
    s = HTMLSession()
    r = s.get(website)
    name = r.html.find('h2', first=True)
    #print(name.text)

    info_texts = []
    info_texts.append(name.text)
    #print(info_texts)

    info = r.html.find('td')
    for element in info:
        info_texts.append(element.text)
        
    for i in range(0, len(info_texts)):
        print(info_texts[i])


    test_text = '\n'.join([item.text for item in info])
    print(test_text)

    visual_text = test_text.replace("\n", "↵\n")

    # Printing the modified string
    print("visual text")
    print(visual_text)

    faculty_data = parse_data(test_text)
    print("faculty data")
    print(faculty_data)

    json_object = json.dumps(faculty_data, indent=4)

    with open("ProfessorSample.json", "w") as outfile:
        outfile.write(json_object)


def parse_data(text):
        faculty_data = {}
        lines = text.split("\n")
        iterator = iter(lines)
        
        try:
            while True:

                faculty_data["Name"] = info_texts[0]
                faculty_data["Title"] = info_texts[1]
                
                for line in iterator:
                    line = line.strip()
                    if not line:
                        break
                    key, _, value = line.partition(":")
                    if key in ["Office", "Phone", "Email", "Personal Website", "Research Groups"]:
                        faculty_data[key] = value.strip()
                    elif key in ["Office Hours", "Teaching (Fall 2023)", "Research", "Education"]:
                        if key not in faculty_data:
                            faculty_data[key] = []
                        faculty_data[key].append(value.strip())
                        
        except StopIteration:
            pass
        
        return faculty_data



