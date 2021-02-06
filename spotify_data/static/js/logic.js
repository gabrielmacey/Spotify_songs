$(function(){
	$('.dropdown .dropdown-toggle').click(function(event){
		$(this).parent().children('.dropdown-menu').toggle(200);
	});
});
