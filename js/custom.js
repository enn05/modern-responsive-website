// Services Section

$(function() {
	//initialize wow js
	new WOW().init();
});

// Work Section

$(function(){
	$('#work').magnificPopup({
		delegate: 'a', // child items selector, by clicking on it popup will open
  		type: 'image',
  		gallery:{
    		enabled:true
  		}
	});
})

// Team Section

$(function(){
	$("#team-members").owlCarousel({
        items: 3,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
		autoplayHoverPause: true,
		responsive : {
			// breakpoint from 0 up
			0 : {
				items: 1
			},
			// breakpoint from 480 up
			480 : {
				items: 2
			},
			// breakpoint from 768 up
			768 : {
				items: 3
			}
		}
    });
});

//Testimonials Section

$(function(){
	$("#customer-testimonials").owlCarousel({
        items: 1,
        autoplay: true,
        smartSpeed: 700,
		loop: true,
		autoplayHoverPause: true
    });
});

// Stats Section

$(function() {
	$('.counter').counterUp({
		delay: 10,
		time: 1500
	});
})

// Clients Section

$(function(){
	$("#clients-list").owlCarousel({
        items: 6,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
		autoplayHoverPause: true,
		responsive : {
			// breakpoint from 0 up
			0 : {
				items: 1
			},
			// breakpoint from 480 up
			480 : {
				items: 3
			},
			// breakpoint from 768 up
			768 : {
				items: 5
			},
			992 : {
				items: 6
			}
		}
    });
});

// Navigation
$(function(){
	$(window).scroll(function(){
		if($(this).scrollTop() < 50 ) {
			//hides nav
			$("nav").removeClass("vesco-top-nav");
			$("#back-to-top").fadeOut();
		} else {
			//shows nav
			$("nav").addClass("vesco-top-nav");
			$("#back-to-top").fadeIn();
		}
	});
});

// Smooth scroll
$(function(){
	$("a.smooth-scroll").click(function(event){
		event.preventDefault();
		var section = $(this).attr("href");
		$('html, body').animate({
			scrollTop: $(section).offset().top - 64
		}, 1250, "easeInOutExpo");
	});
});

// Close mobile menu on click

$(function(){
	$(".navbar-collapse ul li a").on("click touch", function(){
		$(".navbar-toggle").click();
	})
});


// When nav is clicked, will add vesco-top-nav class
// $(function(){
// 	$("button").click(function(){
// 		$("nav").toggleClass("vesco-top-nav");
// 	  });
// });