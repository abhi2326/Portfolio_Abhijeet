import base64

# This is a placeholder for the profile photo
# In a real scenario, you would save the actual image file here
# For now, I'll create a simple placeholder that you can replace

# Create a simple colored rectangle as a placeholder
# You should replace this with your actual profile photo
placeholder_svg = '''
<svg width="300" height="300" xmlns="http://www.w3.org/2000/svg">
  <rect width="300" height="300" fill="#667eea"/>
  <circle cx="150" cy="120" r="50" fill="#ffffff"/>
  <rect x="100" y="190" width="100" height="60" fill="#ffffff"/>
  <text x="150" y="280" text-anchor="middle" fill="#ffffff" font-family="Arial" font-size="16">Profile Photo</text>
</svg>
'''

# Save as SVG placeholder
with open('profile-photo.svg', 'w') as f:
    f.write(placeholder_svg)

print("Profile photo placeholder created as profile-photo.svg")
print("Please replace this with your actual profile photo as 'profile-photo.jpg'") 