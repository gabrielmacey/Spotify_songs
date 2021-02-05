$(function(){
	$('#artist-dropdown .dropdown-item').click(function(){
		$.ajax({
			url: '/artist-top-songs',
			data: $('form').serialize(),
			type: 'POST',
			success: function(response){
				console.log(response);
			},
			error: function(error){
				console.log(error);
			}
		});
	});
});
const artistName = event.target.textContent;
