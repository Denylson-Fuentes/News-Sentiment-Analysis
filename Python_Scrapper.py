from urllib.request import urlopen as uReq
from bs4 import BeautifulSoup as soup

#pip install bs4
#pip install urllib (use pythonenv if needed urllib3 is new version)
#use ipython interpreter (type: python (in terminal)) 
#print all the uncommented lines of code below to collect page data

#######################
# Collect the page 
# can change the url to any webpage make sure to inspect to see which tag the review is linked to 
############################

page_url = 'https://www.imdb.com/title/tt5491994/?pf_rd_m=A2FGELUUNOQJNL&pf_rd_p=12230b0e-0e00-43ed-9e59-8d5353703cce&pf_rd_r=5712KXHS7VP97846934S&pf_rd_s=center-1&pf_rd_t=15506&pf_rd_i=toptv&ref_=chttvtp_tt_1'
#collects the formatted data from the website

uClient= uReq(page_url)
# opening up the connection to grab the page
 
page_html = uClient.read()
#loads the content into a variable

uClient.close()
 # closes the content 


page_soup = soup(page_html, "html.parser")
#html parsing


#page_soup.p will print the <p> tags
