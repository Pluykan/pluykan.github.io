$(document).ready(function() {
    $('#slides').superslides({
        animation: 'slide',
        play: 5000,
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

      const skillsTopOffset = $("#skills").offset().top;
      var statsTopOffset = $(".statsSection").offset().top;
      console.log(skillsTopOffset);
      var countUpFinished = false;
      $(window).scroll(function(){
          console.log(window.pageYOffset);
          if(window.pageYOffset > skillsTopOffset - $(window).height() + 200){
            $('.chart').easyPieChart({
                easing: 'easeInOut',
                barColor: 'aquamarine',
                trackColor: false,
                scaleColor: false,
                size: 152,
                lineWidth: 4,
                onStep: function(from, to, percent){
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
      








});