from urllib3.request import urlopen as uReq
from bs4 import BeautifulSoup as soup

# Collect the page 
# source = requests.get('').text
# print the page
# print (soup.prettify())

# page_url = requests.get('https://www.kaggle.com/general/734').text  #prints the formatted code from a website

page_url = requests.get('https://www.yelp.com/search?cflt=restaurants&find_loc=Los+Angeles%2C+CA').text  #prints the formatted code from a website
soup = BeautifulSoup(source, 'lxml')
# opening up connection, grabbing the page

page_html = uClient.read() #loads the content into a variable

uClient.close() # closes the content 

#html parsing

page_soup = soup(page_html, "html.parser")

#page_soup.p will print the <p> tags