$(function(){
	$('.dropdown .dropdown-toggle').click(function(event){
		$(this).parent().children('.dropdown-menu').toggle(200);
	});

	$('#year-dropdown .dropdown-item').click((event) => {
		$.ajax({
	    type:"GET",
	    url: "/year",
			data: {
				popularity_index: event.target.textContent
			},
	    success: function(data) {
				$('#year-dropdown .dropdown-menu').hide(200);
				updateGraph(data);
	    },
	    error: function(jqXHR, textStatus, errorThrown) {
				$('#year-dropdown .dropdown-menu').hide(200);
	      alert(jqXHR.status);
	    },
		});
	});
});

function updateGraph(yearData) {
	let data = {
	  x: [],
	  y: [],
	  type: "bar",
	  marker: {
	    color: '#1DB954',
	  }
	};
	yearData.forEach((item, i) => {
		data.x.push(item['song_title']);
		data.y.push(item['popularity_index']);
	});
	console.log(artistData);

	const layout = {
	  title: "Spotify Year Popularity"
	};

	Plotly.newPlot("table", [data], layout);
}
