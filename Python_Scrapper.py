from urllib.request import urlopen as uReq
from bs4 import BeautifulSoup as soup


#pip install bs4
#pip install urllib (use pythonenv if needed urllib3 is new version)
#use ipython interpreter (type: python (in terminal)) 
#print all the uncommented lines of code below to collect page data

#######################
# Collect the page 
# feel free to change the url to any webpage, make sure to inspect to see which tag the review is linked to 
# Connect to the website and return the html to the variable ‘article’
# Print the article to scraped_text.txt
############################
    
    # import libraries
from urllib.request import urlopen
from bs4 import BeautifulSoup

# specify the url that will collect the formatted data from the website
url = 'https://www.foxnews.com/media/hannity-bidens-response-to-colonial-pipeline-hack-is-beyond-embarassing'

# url = 'https://finance.yahoo.com/news/final-presidential-debate-review-joe-031940523.html'


try:
    page = urlopen(url)
except:
    print("Error opening the URL")

# parse the html using beautiful soup and store in variable `soup`
soup = BeautifulSoup(page, 'html.parser')

# Take out the <div> of name and get its value
content = soup.find('div', {"class": "article-body"})

article = ''
for i in soup.find_all('p'):
    article = article + '' +  i.text
print(article) 

# Saving the scraped text
with open('scraped_text.txt', 'w') as file:
    file.write(article)