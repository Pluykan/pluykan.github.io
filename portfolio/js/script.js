window.onload = function () {
    document.body.classList.add('loaded_hiding');
    window.setTimeout(function () {
      document.body.classList.add('loaded');
      document.body.classList.remove('loaded_hiding');
    }, 500);
  }


$(document).ready(function() {
  
    $(".loader .inner").fadeOut(500, function () {
		$(".loader").fadeOut(750);
	});

    $('#slides').superslides({
        animation: 'fade',
        play: 5000,
        pagination: false,
        animation_easing: 'linear'
    });

    var typed = new Typed('.typed', {
        strings: ['Anime', 'Manga', 'Hentai'],
        loop: true,
        typeSpeed: 40,
        backSpeed: 40
      });

      $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        responsive:{
            0:{
                items:1
            },
            480:{
                items:2
            },
            768:{
                items:3
            },
            938:{
                items:4
            }
        }
      });

      var skillsTopOffset = $("#skills").offset().top;
	var statsTopOffset = $(".statsSection").offset().top;
	var countUpFinished = false;
	$(window).scroll(function () {
		if (window.pageYOffset > skillsTopOffset - $(window).height() + 200) {
			$('.chart').easyPieChart({
				easing: 'easeInOut',
				barColor: 'aquamarine',
				trackColor: false,
				scaleColor: false,
				lineWidth: 4,
				size: 152,
				onStep: function (from, to, percent) {
					$(this.el).find('.percent').text(Math.round(percent));
				}
			});
		}
		if (!countUpFinished && window.pageYOffset > statsTopOffset - $(window).height() + 200) {
			$(".counter").each(function () {
				var element = $(this);
				var endVal = parseInt(element.text());
				element.countup(endVal);
			})
			countUpFinished = true;
		}
	});
      
      $(window).on('load', function () {
		$(".items").isotope({
			filter: '*',
			animationOptions: {
				duration: 1500,
				easing: 'linear',
				queue: false
			}
		});
	});

    $(window).on('load', function () {
		$(".items").isotope({
			filter: '*',
			animationOptions: {
				duration: 1500,
				easing: 'linear',
				queue: false
			}
		});
	});


	$("#filters a").click(function () {
		$("#filters .current").removeClass("current");
		$(this).addClass("current");
		var selector = $(this).attr("data-filter");
		$(".items").isotope({
			filter: selector,
			animationOptions: {
				duration: 1500,
				easing: 'linear',
				queue: false
			}
		});
		return false;
	});






});