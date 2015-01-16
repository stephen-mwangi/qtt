// Written for prototype of Queensland Treasury and Trade Website
// Author: Jake Waterer
// Company: Breadcrumb Digital
// Notes: Not for production or public use

$(function(){

// mobile menu logic
//
	$('.navbar-toggle').click(function() {
		$('body').toggleClass('lock-scroll');
		$('#mega-menu-search').removeClass('expanded');
		$('#main-nav').toggleClass('active');

		$('.mega-menu-close').removeClass('show');
		$('#site-menu > li > a').removeClass('open');
		$('.detail-panel').addClass('shrink');
		$('li.shrink').removeClass('shrink');
	});

	$('#search-button').click(function() {
		// Shrink mega menu
		$('.mega-menu-close').removeClass('show');
		$('#site-menu > li > a').removeClass('open');
		$('.detail-panel').addClass('shrink');
		$('li.shrink').removeClass('shrink');

		// Expand search
		$('#mega-menu-search').toggleClass('expanded');
	});


	$('.mega-menu-close').click(function(e) {
		e.preventDefault();
		e.stopPropagation();

		$('.mega-menu-close').removeClass('show');
		$('#site-menu > li > a').removeClass('open');
		$('.detail-panel').addClass('shrink');
		$('li.shrink').removeClass('shrink');
	});

	$('.menu-home > a').click(function(e) {

		// TR -- Removed to allow click to index.php
		//e.preventDefault();
		//e.stopPropagation();

		$('.mega-menu-close').removeClass('show');
		$('#site-menu > li > a').removeClass('open');
		$('.detail-panel').addClass('shrink');
		$('li.shrink').removeClass('shrink');

	});

//
//  end mobile menu logic

	$('.detail-panel').addClass('shrink');

		$('#site-menu > li > a').slice(1).click(function(e){if (e.preventDefault) { e.preventDefault(); } else { e.returnValue = false; }});

		$('#site-menu > li > a').slice(1).on('mousedown', function(e){

			if (e.preventDefault) { e.preventDefault(); } else { e.returnValue = false; }

			$('.mega-menu-close').addClass('show');

			if($(this).hasClass('open')){
				//shrink all detail panels
				$('.detail-panel').addClass('shrink');


				$('.detail-panel').parent().find("a").removeClass("open");
				$('.detail-panel').parent().find("a").removeClass("open-mouse");
				$('.detail-panel').parent().removeClass("open-parent");

				$(this).parent().removeClass('open-parent');
				$(this).removeClass('open');
				$(this).removeClass('open-mouse');
			}else{
				//shrink all detail panels
				$('.detail-panel').parent().find("a").removeClass("open");
				$('.detail-panel').parent().find("a").removeClass("open-mouse");
				$('.detail-panel').parent().removeClass("open-parent");

				$('.detail-panel').addClass('shrink');
				$(this).parents('li').find('.detail-panel').removeClass('shrink');


				$(this).addClass('open');
				$(this).addClass('open-mouse');
				$(this).parent().addClass('open-parent');
				//$(this).parents('li').find('.detail-panel').removeClass('shrink');
			}


		});


	$('#site-menu .detail-panel a').attr('tabindex', '-1');
	$('#site-menu > li > a').on('focus', function() {
		if (!$(this).hasClass('open-mouse')) {
			$(this).addClass('open');
			$(this).parent().addClass('open-parent');
			$(this).css("zIndex", "999");
			// shrink all detail panels
			$('.detail-panel').addClass('shrink');
			$(this).parents('li').find('.detail-panel').removeClass('shrink');
		}
	});


	$(document).keydown(function( event ) {
		var tabIndexElement=null;

		// if down arrow
		if ( event.which == 40 ) {
			tabIndexElement = $("#site-menu > li > a.open").parents("li").find(".detail-panel a[tabindex='0']");
			//$("#site-menu > li > a.open").parents("li").find(".detail-panel a[tabindex='0']").attr('tabindex', '-1');
			if (tabIndexElement.length > 0) {
				// mark current anchor as 'dirty'
				var dirtyTabElement = tabIndexElement.first().attr('tabindex', '1');
				// get next untouched anchor
				$("#site-menu > li > a.open").parents("li").find(".detail-panel a[tabindex='-1']").first().attr('tabindex', '0').focus();
			} else {
				$("#site-menu > li > a.open").parents("li").find('.detail-panel a').first().attr('tabindex', '0').focus();
			}

			if (event.preventDefault) { event.preventDefault(); } else { event.returnValue = false; }
		}

		// if up arrow
		if ( event.which == 38 ) {
			tabIndexElement = $("#site-menu > li > a.open").parents("li").find(".detail-panel a[tabindex='1']");
			//$("#site-menu > li > a.open").parents("li").find(".detail-panel a[tabindex='0']").attr('tabindex', '-1');
			if (tabIndexElement.length > 0) {
				// mark current anchor as 'dirty'
				var dirtyTabElement =  $("#site-menu > li > a.open").parents("li").find(".detail-panel a:focus").attr('tabindex', '2');
				$("#site-menu > li > a.open").parents("li").find(".detail-panel a[tabindex='1']").last().attr('tabindex', '0').focus();
				dirtyTabElement.attr('tabindex', '-1');
			} else {
				$("#site-menu > li > a.open").parents("li").find(".detail-panel a[tabindex='1']").last().attr('tabindex', '0').focus();
			}

			if (event.preventDefault) { event.preventDefault(); } else { event.returnValue = false; }
		}

		// if TAB key
		if ( event.which == 9 ) {
			$('#site-menu li').removeClass('open-parent');
			$('#site-menu a').removeClass('open-mouse');
			$('#site-menu a').removeClass('open');
			$('#site-menu li').find('.detail-panel').removeClass('grow').addClass('shrink');
			$('#site-menu .detail-panel a').attr('tabindex', '-1');
		}


	});

	$('body').click(function(e){
		if(!($(e.target).parents('.mega-menu').length>0)){
			$('body').find('.detail-panel').addClass('shrink');
			$('body').find('.detail-panel').parent().removeClass('open-parent');
			$('body').find('.detail-panel').parent().find("a").removeClass('open');
			$('body').find('.detail-panel').parent().find("a").removeClass('open-mouse');
		}
	});
});
