import os
import subprocess

# List of images
images = os.listdir(os.getcwd())
images.remove('a.py')
# Sort the list of images
images.sort(key=lambda x: int(x.split('.')[0]))

# Path where the images are located (change this to your path)
img_path = './'  # Current directory

for index, img in enumerate(images, start=1):
    old_path = os.path.join(img_path, img)
    new_path = os.path.join(img_path, f"{index}.jpg")

    # Use ImageMagick's 'convert' tool to compress and rename
    # '-define' is used to set the target filesize. However, reaching exactly 10KB may not be possible depending on the image content and format. 
    # This will get it as close as possible without exceeding the limit.
    subprocess.run(['convert', old_path, '-define', 'jpeg:extent=10KB', new_path])

    # Remove the old file if it's different from the new file
    if old_path != new_path:
        os.remove(old_path)

