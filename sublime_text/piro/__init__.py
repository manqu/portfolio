from flask import render_template, request, session, Flask
app = Flask(__name__)

from controller import *

if __name__== '__main__':
   app.secret_key ='sdfsdfsdf'
   app.run(debug=True, host='0.0.0.0') 
