#Import Flask
from flask import Flask, render_template, redirect
from flask_pymongo import PyMongo

# Create an instance of our Flask app.
app = Flask(__name__)

# Use flask_pymongo to set up mongo connection
app.config["MONGO_URI"] = "mongodb://localhost:27017/spotify"
mongo = PyMongo(app)

# Set route
@app.route('/')
def index():
    spotify_page = mongo.db.songs.find_one()
    return render_template("index.html", spotify_songs=spotify_page)


@app.route('/artistname=<artist>')
def artist(artist):
    
    #return redirect("/", code=302)

if __name__ == "__main__":
    app.run(debug=True)
