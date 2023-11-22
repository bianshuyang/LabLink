from bs4 import BeautifulSoup
import json

def do(prof):
    with open(prof, 'r') as file:
        file_content = file.read()
    # Assuming 'html_content' contains the HTML data you provided
    soup = BeautifulSoup(file_content, 'html.parser')

    professors = []
    for card in soup.find_all('div', class_='card card-contact'):
        name = card.find('h5', class_='card-title').text.strip()
        title = card.find('h6', class_='card-subtitle').text.strip()
        try:
            bio_link = card.find('a')['href']
        except:
            print(card,'a is not')
        tags = json.loads(card.get('data-tags', '[]'))  # Parse the data-tags attribute as JSON

        professor_info = {
            'name': name,
            'title': title,
            'bio_link': bio_link,
            'tags': tags  # Add the tags to the dictionary
        }
        professors.append(professor_info)

    # Convert the list of dictionaries to JSON
    json_data = json.dumps(professors, indent=4)

    # 'json_data' now contains the JSON representation of the professors' information, including their tags

    output_file = prof.replace('.html','')+'.json'  # You can change the file name as needed
    with open(output_file, 'w') as file:
        file.write(json_data)


import os
a = os.listdir(os.getcwd())
for i in a:
    if '.html' in i:
        try:
            do(i)
        except:
            print(i)