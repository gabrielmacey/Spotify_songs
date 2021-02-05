var data = [{
  values: [10,5,13,7,40,15,10],
  labels: ["Sam Smith", "Beyonce", "Rhianna", "Queen", "Aerosmith", "Bad Bunny", "Marc Anthony"],
  type: 'pie',
  marker: {
      colors: ['#1DB954','green','#1DB954','green','#1DB954','green','#1DB954']
    }
}];

var layout = {
  height: 400,
  width: 500,
  title: "Top Artists 2020"
};

// Append a group to the SVG area and shift ('translate') it to the right and to the bottom
var chartGroup = svg.append("g")
.attr("transform", `translate(${chartMargin.left}, ${chartMargin.top})`);

Plotly.newPlot("pie", data, layout);
