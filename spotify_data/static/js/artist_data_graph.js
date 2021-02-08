$(function(){
	$('#artist-dropdown .dropdown-item').click((event) => {
		$.ajax({
	    type:"GET",
	    url: "/json-file",
			data: {
				artist: event.target.textContent
			},
	    success: function(data) {
				$('#artist-dropdown .dropdown-menu').hide(200);
				updateGraph(data);
	    },
	    error: function(jqXHR, textStatus, errorThrown) {
				$('#artist-dropdown .dropdown-menu').hide(200);
	      alert(jqXHR.status);
	    },
		});
	});
});

function updateGraph(artistData) {
	let data = {
	  x: [],
	  y: [],
	  type: "bar",
	  marker: {
	    color: '#1DB954',
	  }
	};
	artistData.forEach((item, i) => {
		data.x.push(item['song_title']);
		data.y.push(item['popularity_index']);
	});
	console.log(artistData);

	const layout = {
	  title: "Spotify Artists Popularity",
	  xaxis: { title: "Song Title" },
	  yaxis: { title: "Popularity Index"}


	Plotly.newPlot("plot", [data], layout);
}

/*
let filters = {
	artist: 'All',
	popularity:
}

$(function(){
	$('.dropdown .dropdown-toggle').click(function(event){
		$(this).parent().children('.dropdown-menu').toggle(200);
	});

	$('#artist-dropdown .dropdown-item').click((event) => {
		filters.artist = event.target.textContent;
		updateGraph();
	});

	$('#popularity-dropdown .dropdown-item').click((event) => {
		filters.popularity = event.target.textContent;
		updateGraph();
	});
});

function updateGraph() {
	$.ajax({
		type:"GET",
		url: "/json-file",
		data: filters,
		success: function(data) {
			$('#artist-dropdown .dropdown-menu').hide(200);
			renderGraph(data);
		},
		error: function(jqXHR, textStatus, errorThrown) {
			$('#artist-dropdown .dropdown-menu').hide(200);
			alert(jqXHR.status);
		},
	});
}

function renderGraph(artistData) {
	let data = {
	  x: [],
	  y: [],
	  type: "bar",
	  marker: {
	    color: '#1DB954',
	  }
	};
	artistData.forEach((item, i) => {
		data.x.push(item['song_title']);
		data.y.push(item['popularity_index']);
	});
	console.log(artistData);

	const layout = {
	  title: "Spotify Artists Popularity"
	};

	Plotly.newPlot("plot", [data], layout);
}
*/
