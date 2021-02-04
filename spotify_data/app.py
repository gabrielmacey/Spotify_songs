#Import Flask
from flask import Flask, render_template, redirect, jsonify
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
@app.route('/index.html')
def index():
    spot_songs = mongo.db.songs.find_one()
    artists = []
    release = []
    hard = []
    soft = []
    art = "Sam Hunt"
    release_year = "all"
    for object in mongo.db.songs.find({}, {"_id":False}):
        artist = object["artist"]
        if artist not in artists:
            artists.append(artist)
        else:
            exit
        year = object["year_of_release"]
        if year not in release:
            release.append(year)
        else:
            exit
        if (artist == art) and (release_year == "all"):
            hard.append(object)
        elif (artist == art) and (year == release_year):
            hard.append(object)
        else:
            exit
    return render_template("index.html", artists=artists, release=release, hard=hard)

@app.route('/Artist_Top_Songs.html/')
def top_art():
    artists = []
    for object in mongo.db.songs.find({}, {"_id":False}):
        artist = object["artist"]
        if artist not in artists:
            artists.append(artist)
        else:
            exit
        sep = object["album_release_date"].split("-")
    return render_template("Artist_Top_Songs.html", artists=artists)

@app.route('/data/<artist>')
def data(artist):
    results = mongo.db.songs.find({"artist":artist}, {"_id":False})
    # results = mongo.db.songs.find({"artist":artist}, {"_id":False})
    data1 = []
    for result in results:
        data1.append(result)
    return jsonify(data1)

if __name__ == "__main__":
    app.run(debug=True)
