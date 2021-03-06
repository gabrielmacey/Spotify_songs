#Import Flask
from flask import Flask, render_template, redirect, jsonify, request
from flask_pymongo import PyMongo
import json
from bson import json_util
from bson.json_util import dumps
from pymongo import MongoClient


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

@app.route('/artist-top-songs')
def top_art():
    artists = []
    for object in mongo.db.songs.find({}, {"_id":False}):
        artist = object["artist"]
        if artist not in artists:
            artists.append(artist)
        else:
            exit
    return render_template("Artist_Top_Songs.html", artists=artists)

@app.route('/popularity-and-year')
def top_pop():
    artists = []
    date_release = []
    for object in mongo.db.songs.find({}, {"_id":False}):
        artist = object["artist"]
        if artist not in artists:
            artists.append(artist)
        else:
            exit
        years = object["year_of_release"]
        if years not in date_release:
            date_release.append(years)
        else:
            exit
    return render_template("Song_Data.html", artists=artists, date_release=date_release)

@app.route('/json-file')
def file():
    artist = request.args.get('artist')
    if not artist:
        return

    if artist == 'All':
        results = mongo.db.songs.find({}, {"_id":False})
    else:
        results = mongo.db.songs.find({'artist': artist}, {"_id":False})

    data1 = []
    for result in results:
        data1.append(result)
    return jsonify(data1)

@app.route('/year')
def afile():
    year_of_release = request.args.get('year_of_release')
    if not year_of_release:
        return

    if year_of_release == 'All':
        results = mongo.db.songs.find({}, {"_id":False})
    else:
        results = mongo.db.songs.find({'year_of_release': year_of_release}, {"_id":False})

    data = []
    for result in results:
        data.append(result)
    return jsonify(data)

@app.route('/pop')
def bfile():
    artist= request.args.get('artist')
    if not artist:
        return

    if artist == 'All':
        results = mongo.db.songs.find({}, {"_id":False})
    else:
        results = mongo.db.songs.find({'artist': artist}, {"_id":False})

    data1 = []
    for result in results:
        data1.append(result)
    return jsonify(data1)

@app.route('/about')
def about():
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
    return render_template("about.html", artists=artists, release=release, hard=hard)

if __name__ == "__main__":
    app.run(debug=True)
