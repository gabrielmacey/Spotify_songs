var trace1 = {
    x: ["Sam Smith", "Beyonce", "Rhianna", "Queen", "Aerosmith", "Bad Bunny", "Marc Anthony"],
    y: [22.7, 17.1, 9.9, 8.7, 7.2, 6.1, 6.0],
    type: "bar",
    marker: {
      color: '#1DB954',
    }

  };

  var data = [trace1];

  var layout = {
    title: "Spotify Artists Popularity"
  };

  Plotly.newPlot("plot", data, layout); 
