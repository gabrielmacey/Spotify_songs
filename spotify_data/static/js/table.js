var values = [
    ['1','2','3','4'],
    ['Body Like a Back Road', "Hard to Forget", "House Party", "Break up in a Small Town"],
    ['Needed Me', "Desperado", "Love the way you Lie", "Love on the Brain"],
    ["Savage Remix", "Crazy in Love", "Formation", "Halo"],
    ["Good Days", "Hits Different", "All the Stars", "Love Galore"], ['Vivir mi vida', "La Gozadera", "De Vuelta Pa' La Vuelta", "Por Amar Se Da Todo"], ]

var data = [{
type: 'table',
header: {
  values: [["<b>Artist Top Songs</b>"], ["<b>Sam Hunt</b>"],
               ["<b>Rihanna</b>"], ["<b>Beyonce</b>"], ["<b>SZA</b>"], ["<b>Marc Anthony</b>"]],
  align: "center",
  line: {width: 1, color: 'black'},
  fill: {color: "#1DB954"},
  font: {family: "Arial", size: 18, color: "white"}, 
  height: 30
},
cells: {
  values: values,
  align: "center",
  line: {color: "green", width: 1},
  font: {family: "Arial", size: 16, color: ["black"]}, 
  height: 30
}
}]

Plotly.newPlot('table', data);