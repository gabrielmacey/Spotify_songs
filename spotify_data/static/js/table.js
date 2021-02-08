$(function(){
	$('#popularity-dropdown .dropdown-item').click((event) => {
		$.ajax({
	    type:"GET",
	    url: "/json-file",
			data: {
        artist: event.target.textContent
			},
	    success: function(data) {
				$('#popularity-dropdown .dropdown-menu').hide(200);
				updatePopularityGraph(data);
	    },
	    error: function(jqXHR, textStatus, errorThrown) {
				$('#popularity-dropdown .dropdown-menu').hide(200);
	      alert(jqXHR.status);
	    },
		});
	});
});

function updatePopularityGraph(popularityData) {
	let data = {
	  x: [],
	  y: [],
	  type: "bar",
	  marker: {
	    color: '#1DB954',
	  }
	};
	popularityData.forEach((item, i) => {
		data.x.push(item['year_of_release']);
		data.y.push(item['popularity_index']);
	});
	console.log(popularityData);

	const layout = {
	  title: "Spotify Artist Year Popularity",
	  xaxis: { title: "Release Year" },
	  yaxis: { title: "Popularity Index"}


	Plotly.newPlot("plot", [data], layout);
}
