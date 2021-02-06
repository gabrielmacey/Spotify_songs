# Spotify_songs

#What are we doing?
We are taking information from Spotify and showcasing it on a web browser.
By allowing the user to adjust the parameters of each bar graph, we are allowing the user to visual information about some of their favorite artists that we have chosen.

#How did we do it?
Our project takes information from a Spotify API and stores that information in a Jupyter Notebook. This information is stored as a DataFrame and a dictionary.
We then push this information to MongoDB.
Our MongoDB is then linked to a flask which is linked to a javascript file and html.
We are then allowing users to update their preferred data on the front-end which then calls the back-end and requests desired information.
This desired information is then pushed back into the front-end files and showcases visualization of the information requested.

![alt text](https://github.com/gabrielmacey/SpotifySongs/blob/main/spotify_data/static/img/image.jpg?raw=true)
