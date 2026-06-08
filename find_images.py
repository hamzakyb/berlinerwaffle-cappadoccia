import re

with open("public/logo.svg", "r") as f:
    content = f.read()

# Find all image tags
images = re.findall(r'<image[^>]+>', content)
print(f"Total images found: {len(images)}")
for i, img in enumerate(images):
    # Print first 200 chars of each image tag
    print(f"Image {i+1}: {img[:200]}...")
