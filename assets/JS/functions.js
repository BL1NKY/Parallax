$( document ).ready(function() {

	$(window).scroll(function() {

		var wScroll = $(this).scrollTop();

		$(".logo").css({
			"transform" : "translate(0px, " + wScroll /2 + "%)"
		});

		$(".back-bird").css({
			"transform" : "translate(0px, " + wScroll /4 + "%)"
		});

		$(".fore-bird").css({
			"transform" : "translate(0px, -" + wScroll /32 + "%)"
		});

		if(wScroll > $(".clothes").offset().top - ($(window).height() / 1.2)) {
			$(".clothes figure").each(function(i) {
				setTimeout(function() {

					$(".clothes figure").eq(i).addClass("is-showing");

				}, 150 * (i + 1));
			});
		}

		if(wScroll > $(".large-window").offset().top - $(window).height()) {
			$(".large-window").css({"background-position":"center " + (wScroll - $(".large-window").offset().top) + "px"});
			
			var opacity = (wScroll - $(".large-window").offset().top + (($(window).height() - 480))) / (wScroll / 7)
			$(".window-tint").css({"opacity":opacity})
		}

	});
});
