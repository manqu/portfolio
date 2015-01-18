from flask import Flask, render_template, request, session
app = Flask(__name__)

@app.route('/')
def hello_world():
   return render_template("codink.html")

@app.route('/minahpage')
def minahpage():
	import urllib
	from bs4 import BeautifulSoup
	url=urllib.urlopen('http://monthlyart.com/category/2014-12/')
	url2=urllib.urlopen('http://www.venturesquare.net/')
	soup=BeautifulSoup(url)
	soup2=BeautifulSoup(url2)
	
	return render_template("minahpage.html", soup=soup, soup2=soup2)

@app.route('/jiyoon')
def jiyoon():
	return render_template("jiyoon.html")

@app.route('/jaehyo')
def jaehyo():
	return render_template("jaehyo.html") 

@app.route('/ jeonghyeon')
def  jeonghyeon():
	return render_template("jeonghyeon.html") 

@app.route('/jaeyoon')
def jaeyoon():
	return render_template("jaeyoon.html") 
 
if __name__== '__main__':
   app.secret_key ='sdfsdfsdf'
   app.run(debug=True, host='0.0.0.0') 

 

  
