import requests
from bs4 import BeautifulSoup
import json

def extract_info(urls):
    professors_data = []
    # Try to load existing data

    for url in urls:
        # Send a GET request to the webpage
        response = requests.get(url)

        if response.status_code != 200:
            print(f"Failed to retrieve the webpage {url}. Status code: {response.status_code}")
            continue

        # Parse the webpage content
        soup = BeautifulSoup(response.text, 'html.parser')

        # Find the specific div containing the data
        div = soup.find('div', class_='span6')

        if not div:
            print(f"No data div found on {url}.")
            continue

        professor_data = {
            "Name": "",
            "Title": "",
            "Office": "",
            "Phone": "",
            "Email": "",
            "Personal Website": "",
            "Research Groups": "",
            "Office Hours": [],
            "Teaching (Fall 2023)": [],
            "Research": [],
            "Education": []
        }
        if div.find('h2'):
            professor_data['Name'] = div.find('h2').text.strip()

        if div.find('td'):
            professor_data['Title'] = div.find('td').text.strip()

        office_elem = div.find('b', text='Office')
        if office_elem and office_elem.find_next_sibling(text=True):
            professor_data['Office'] = office_elem.find_next_sibling(text=True).strip(': ')

        phone_elem = div.find('a', href=True)
        if phone_elem:
            professor_data['Phone'] = phone_elem.text.strip()

        website_elem = div.find('a', href=True)
        if website_elem:
            professor_data['Personal Website'] = website_elem['href'].strip()

        research_group_elem = div.find('b', text='Research Groups')
        if research_group_elem and research_group_elem.find_next_sibling(text=True):
            professor_data['Research Groups'] = research_group_elem.find_next_sibling(text=True).strip(': ')

        office_hours_elem = div.find('h5', text='Office Hours:')
        if office_hours_elem:
            professor_data['Office Hours'] = [li.text.strip() for li in office_hours_elem.find_next_sibling().find_all('li')]

        teaching_elem = div.find('h5', text='Teaching (Fall 2023):')
        if teaching_elem:
            professor_data['Teaching (Fall 2023)'] = [li.text.strip() for li in teaching_elem.find_next_sibling().find_all('li')]

        research_elem = div.find('h5', text='Research:')
        if research_elem:
            professor_data['Research'] = [li.text.strip() for li in research_elem.find_next_sibling().find_all('li')]

        education_elem = div.find('h5', text='Education:')
        if education_elem:
            professor_data['Education'] = [li.text.strip() for li in education_elem.find_next_sibling().find_all('li')]

        image_div = soup.find('div', class_='span2')
        if image_div and image_div.find('img'):
            img_tag = image_div.find('img')
            img_url = img_tag['src']
            img_response = requests.get(img_url)

            if img_response.status_code == 200:
                img_name = f"{professor_data['Name'].replace(' ', '_')}_profile_pic.png"
                with open(img_name, 'wb') as img_file:
                    img_file.write(img_response.content)
                print(f"Image saved as {img_name}")

        print(professor_data)
        professors_data.append(professor_data)
        print(f"Data extracted from {url}")
    

    # Save the data to a JSON file
    with open('ProfessorSampleNew.json', 'w', encoding='utf-8') as file:
        json.dump(professors_data, file, ensure_ascii=False, indent=4)
        print("Data saved to ProfessorSampleNew.json")

# Test the function with the URLs of the webpages containing the data
extract_info(['https://www.cs.emory.edu/people/faculty/individual.php?NUM=350', 'https://www.cs.emory.edu/people/faculty/individual.php?NUM=24', 'https://www.cs.emory.edu/people/faculty/individual.php?NUM=29', 'https://www.cs.emory.edu/people/faculty/individual.php?NUM=428', 'https://www.cs.emory.edu/people/faculty/individual.php?NUM=708', 'https://www.cs.emory.edu/people/faculty/individual.php?NUM=20', 'https://www.cs.emory.edu/people/faculty/individual.php?NUM=774', 'https://www.cs.emory.edu/people/faculty/individual.php?NUM=357', 'https://www.cs.emory.edu/people/faculty/individual.php?NUM=706', 'https://www.cs.emory.edu/people/faculty/individual.php?NUM=773','https://www.cs.emory.edu/people/faculty/individual.php?NUM=685', 'https://www.cs.emory.edu/people/faculty/individual.php?NUM=707', 'https://www.cs.emory.edu/people/faculty/individual.php?NUM=686', 'https://www.cs.emory.edu/people/faculty/individual.php?NUM=687', 'https://www.cs.emory.edu/people/faculty/individual.php?NUM=427', 'https://www.cs.emory.edu/people/faculty/individual.php?NUM=320', 'https://www.cs.emory.edu/people/faculty/individual.php?NUM=579', 'https://www.cs.emory.edu/people/faculty/individual.php?NUM=705'])
