$(function(){
	$('#year-dropdown .dropdown-item').click((event) => {
		$.ajax({
	    type:"GET",
	    url: "/year",
			data: {
				year_of_release: event.target.textContent
			},
	    success: function(data) {
				$('#year-dropdown .dropdown-menu').hide(200);
				updateYearGraph(data);
	    },
	    error: function(jqXHR, textStatus, errorThrown) {
				$('#year-dropdown .dropdown-menu').hide(200);
	      alert(jqXHR.status);
	    },
		});
	});
});

function updateYearGraph(yearData) {
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
	console.log(yearData);

	const layout = {
	  title: "Spotify Year Popularity"
	};

	Plotly.newPlot("table", [data], layout);
}
