from flask import Flask, render_template, request
app = Flask(__name__)

@app.route( '/' )
def hello_world():
	return render_template("home.html")
@app.route('/test/<tempvar>')
def test(tempvar):
	return tempvar

if __name__ == '__main__':
	app.run(debug=True, host='0.0.0.0') 