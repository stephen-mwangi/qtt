// Written for prototype of Queensland Treasury and Trade Website
// Author: Jake Waterer
// Company: Breadcrumb Digital
// Notes: Not for production or public use

$(function(){

	"use strict";

	var Searchable = function () {

		function getWords(){

			// get searchable content
			var text = $('.searchable').html();

			var uniqueWords=[];

			if(text != undefined){

				var words=[];

				// seperate into words -> this regex could be improved significantly.
				text = text.replace(/(<.*?>\s*)+/gi,' ');
				words = text.match(/\S+/g);

				// process all words to get lowercase, unique words
				$.each(words, function(i, el){
					if($.inArray(el.toLowerCase(), uniqueWords) === -1) uniqueWords.push(el.toLowerCase());
				});
			}
			return uniqueWords;
		}


		// on key up event in the filter box
		// #filter could be passed as a parameter to make this more flexible
		$('#filter').keyup(function () {

			// setup filter based on current value in filter control
			var rex = new RegExp($(this).val().toLowerCase(), 'i');

			// there is probably a better algorithm which only hides the rows which don't contain regex rather than hiding all and then showing.
			// hide all rows
			$('.searchable > tr').hide();

			// show rows which match filter
	        // filter doesn't work in early IE - need to add function to Array prototype
	        $('.searchable tr').filter(function () {
	        	return rex.test($(this).text());
	        }).show();


	        // JW made this a cascading filter so tables are hidden if no match content exists within them
			$('.searchable').parents('table').hide();
	        $('.searchable').filter(function () {
	        	return rex.test($(this).text());
	        }).parents('table').show();


	        // JW the addition of "search-section" class allows for whole parent sections to be hidden if don't hold content. See QTT publications section.
			$('.searchable').parents('.search-section').hide();
	        $('.searchable').filter(function () {
	        	return rex.test($(this).text());
	        }).parents('.search-section').show();

	    });

		// typeahead drop down which is populated with the uniquer words
		// uses twitter typeahead
	    $('#filter').typeahead({
		  minLength: 3,
		  highlight: true
		},
		{
		  name: 'my-dataset',
		  source: getWords()
		});

	};

	var SearchContent = new Searchable();

});