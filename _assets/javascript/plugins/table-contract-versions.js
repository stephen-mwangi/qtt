// Written for prototype of Queensland Treasury and Trade Website
// Author: Walt L
// Company: Breadcrumb Digital
// Notes: Not for production or public use

$(function(){
	$('.btn-older').click(function(e) {
		if (e.preventDefault) { e.preventDefault(); } else { e.returnValue = false; }
		var table = $(this).parents('.table-contract');
		$(table).toggleClass('expanded');
	});

});