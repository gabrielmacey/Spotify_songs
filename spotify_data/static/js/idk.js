$(function(){
	$('#artist-dropdown .dropdown-item').click(function(){
		$.ajax({
    type:"GET",
    url: "/artist-top-songs",
		data: {
			artist: "Sam Hunt"
		}
    success: function(data) {
			console.log(data);
        },
    error: function(jqXHR, textStatus, errorThrown) {
            alert(jqXHR.status);
        },
		});
	});
});

$.ajax({
  url: "ajax.aspx",
  type: "get", //send it through get method
  data: {
    ajaxid: 4,
    UserID: UserID,
    EmailAddress: EmailAddress
  },
  success: function(response) {
    //Do Something
  },
