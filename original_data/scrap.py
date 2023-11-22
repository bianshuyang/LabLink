import requests


def download_and_save_html(url):

    try:
        # Fetch the HTML content
        response = requests.get(url)
        response.raise_for_status()

        # Extract a filename from the URL
        domain_part = url.split("//")[-1].split("/")[0]
        filename = domain_part.split(".")[0] if "." in domain_part else None

        if filename:
            # Save the content to a text file
            with open(f'{filename}.txt', 'w', encoding='utf-8') as file:
                file.write(response.text)
            print("OK")
        else:
            print(f"Wrong format for URL: {url}")

    except requests.RequestException as e:
        print(f"Error downloading {url}")

import time
import random
def download_html_as_text(file_with_links):
    # Open the file and read the links
    with open(file_with_links, 'r') as file:
        links = file.readlines()

    # Process each link
    for idx, link in enumerate(links):
        try:
            time.sleep(3)
            time.sleep(random.random())
            download_and_save_html(link)
            time.sleep(2)
            time.sleep(random.random())
        except requests.RequestException as e:
            print(f"Error downloading {link}: {e}")

# Example usage
download_html_as_text('scrap.txt')

