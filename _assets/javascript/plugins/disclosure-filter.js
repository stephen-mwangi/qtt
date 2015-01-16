// Written for prototype of Queensland Treasury and Trade Website
// Author: Jake Waterer
// Company: Breadcrumb Digital
// Notes: Not for production or public use

$(function(){

	"use strict";

	var Filter = function (id, attr) {
		$(id).change(function(){
			if(this.value==="*"){
				$('['+attr+']').show();
			}else{
				$('['+attr+']').hide();
				$('['+attr+'="'+ this.value+'"]').show();
			}
		});
	};

	var Filter = new Filter('#disclosure-filter', 'data-year');

});