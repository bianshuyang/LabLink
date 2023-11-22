import json
import os
a = os.listdir(os.getcwd())
# List of JSON files to be combined
json_files = []
for i in a:
    if '.json' in i:
        json_files.append(i)


# Set of all required attributes
required_attributes = {
    "name", "title", "office", "phone", "email", "Personal Website",
    "researchInterest Groups", "office Hours", "Teaching (Fall 2023)",
    "researchInterest", "Education", "Image"
}

# Initialize a list to hold all combined data
combined_data = []

# Process each file
# Process each file
for file_name in json_files:
    with open(file_name, 'r') as file:
        # Load the JSON data from the file
        data = json.load(file)
        
        # Update each entry to ensure it contains all required attributes
        for entry in data:
            for attribute in required_attributes:
                # Special handling for researchInterest attribute
                if attribute == "researchInterest":
                    entry[attribute] = file_name.replace('.json','')
                else:
                    entry.setdefault(attribute, "")

            combined_data.append(entry)

# Write the combined data to a new JSON file


# Write the combined data to a new JSON file
with open('combined_data.json', 'w') as file:
    json.dump(combined_data, file, indent=4)

print("JSON files have been successfully combined into 'combined_data.json'")

