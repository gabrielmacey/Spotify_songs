#Import Flask
from flask import Flask, render_template, redirect
from flask_pymongo import PyMongo
import json
from bson import json_util
from bson.json_util import dumps

# Create an instance of our Flask app.
app = Flask(__name__)

# Use flask_pymongo to set up mongo connection
app.config["MONGO_URI"] = "mongodb://localhost:27017/spotify"
mongo = PyMongo(app)


# Set route
@app.route('/')
def index():
    spot_songs = mongo.db.songs.find_one()
    artists = []
    for object in mongo.db.songs.find({}, {"_id":False}):
        artists.append(object["artist"])
    return render_template("index.html", artists=artists)



if __name__ == "__main__":
    app.run(debug=True)
