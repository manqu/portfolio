from flask import Flask, render_template, request, session, redirect
from flask.ext.sqlalchemy import SQLAlchemy

from __init__ import app

db = SQLAlchemy(app)

from models import *


@app.route('/')
def hello_world():
   byonsuda=' Yeahhhhh'
   listda=['minah','babo', 3,4]

   import urllib
   from bs4 import BeautifulSoup
   url=urllib.urlopen('http://music.naver.com/listen/top100.nhn?domain=TOTAL')
   soup=BeautifulSoup(url)
   music=soup.find_all('tr')

   return render_template("home.html",byonsuda=byonsuda, listda=listda, soup=soup, music=music)

@app.route('/parsing')
def parsing():
   import urllib
   from bs4 import BeautifulSoup
   url2=urllib.urlopen('http://platum.kr/')
   url3=urllib.urlopen('http://www.venturesquare.net/')
   soup2=BeautifulSoup(url2)
   soup3=BeautifulSoup(url3)
   return render_template('parsing.html', soup2=soup2, soup3=soup3)

@app.route('/test/<tempvar>')
def test(tempvar):
   return tempvar

@app.route('/login', methods= ['POST'])
def login():
      user_id = request.form["user_id"]
      user_pw = request.form["password"]
      if user_id == 'minah':
         if user_pw == '1234':
            session["logged_in"] = True
            return "login success!"
         else:
            return "wrong password"
      else:
         return "wrong id!"