$(document).ready(function() {
	$('.customer-support-section').each(function(){  
      var highestBox = 0;
      $('.support-panel', this).each(function(){
        if($(this).height() > highestBox) {
          highestBox = $(this).height(); 
        }
      });      
      $('.support-panel',this).height(highestBox);              
    });
$(document).ready(function() {
if ($(window).width() < 767) {
    $('.submenu').removeClass('submenu');
} else {
   
}
});

$(document).ready(function() {	
$('.featured-destinations-gallery').slick({
  slidesToShow: 6,	
   autoplay:false,
   autoplaySpeed:2000,
   arrows: true
});
$('.banner-gallery').slick({
  slidesToShow: 1,	
   autoplay:false,
   autoplaySpeed:2000,
   arrows: true
});
$('.panel-layout-gallery').slick({
  slidesToShow: 4,	
     responsive: [
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
     {
      breakpoint: 390,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    
  ]
});
$('.panel-layout-gallery2').slick({
  slidesToShow: 3,
     responsive: [
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
     {
      breakpoint: 390,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    
  ]
});
$('.slider-fullwidth-gallery').slick({
  slidesToShow: 1,	
  autoplay:true,
  autoplaySpeed:2000,
  arrows: true
});
$('.search-item-gallery').slick({
  slidesToShow: 1,	
  autoplay:false,
  autoplaySpeed:2000,
  arrows: true
});
$('.slider-fullwidth-container-gallery').slick({
  slidesToShow: 1,	
  autoplay:true,
  autoplaySpeed:5000,
  arrows: true,
    //fade: true,
  cssEase: 'linear',
   pauseOnHover: false,
   pauseOnFocus: false,
});

$('.slider-fullwidth-header-gallery').slick({
  slidesToShow: 1, 
  autoplay:true,
  autoplaySpeed:5000,
  arrows: false,
  fade: true,
  cssEase: 'linear',
   pauseOnHover: false,
   pauseOnFocus: false,
});

$('.panel-layout-gallery, .panel-layout-gallery2, .slider-fullwidth-gallery, .banner-gallery, .featured-destinations-gallery, .slider-fullwidth-header-gallery').slick({
  dots: false,
  arrows: true,
  infinite: true,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
   
    
     {
      breakpoint: 390,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    
  ]
  
});

});

});



$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });

});

/***** DatePicker *****/
		$(document).ready(function(){
			var nowTemp = new Date();
			var now = new Date(nowTemp.getFullYear(), nowTemp.getMonth(), nowTemp.getDate(), 0, 0, 0, 0);

		  checkInOut($('.dpd1a'), $('.dpd2a'), now);
      checkInOut($('.dpd1b'), $('.dpd2b'), now);
		});
    
    var checkInOut = function(inEl, outEl, now) {
      var checkin = inEl.datepicker({
				onRender: function(date) {
					return date.valueOf() < now.valueOf() ? 'disabled' : '';
				}
			}).on('changeDate', function(ev) {
				if (ev.date.valueOf() > checkout.date.valueOf()) {
					var newDate = new Date(ev.date);
					newDate.setDate(newDate.getDate() + 1);
					checkout.setValue(newDate);
				}
				checkin.hide();
				outEl.focus();
			}).data('datepicker');
			var checkout = outEl.datepicker({
				onRender: function(date) {
					return date.valueOf() <= checkin.date.valueOf() ? 'disabled' : '';
				}
			}).on('changeDate', function(ev) {
				checkout.hide();
			}).data('datepicker');
    };
/***** DropDown ******/	
			function DropDown(el) {
				this.dd = el;
				this.initEvents();
			}
			DropDown.prototype = {
				initEvents : function() {
					var obj = this;

					obj.dd.on('click', function(event){
						$(this).toggleClass('active');
						event.stopPropagation();
					});	
				}
			}

			$(function() {

				var dd = new DropDown( $('#dd') );

				$(document).click(function() {
					// all dropdowns
					$('.guest-dropdown').removeClass('active');
				});

			});
			
$(document).ready(function() {
    $('.navbar a.dropdown-toggle').on('click', function(e) {
        var $el = $(this);
        var $parent = $(this).offsetParent(".dropdown-menu");
        $(this).parent("li").toggleClass('open');

        if(!$parent.parent().hasClass('nav')) {
            $el.next().css({"top": $el[0].offsetTop, "left": $parent.outerWidth() - 4});
        }

        $('.nav li.open').not($(this).parents("li")).removeClass("open");

        return false;
    });
});
if ($(window).width() < 767) {
 $(function() {
$('.dropdown-toggle1').click(function(){
  $(this).next('.dropdown1').toggle();
});
$(document).click(function(e) {
  var target = e.target;
  if (!$(target).is('.dropdown-toggle1') && !$(target).parents().is('.dropdown-toggle1')) {
     $('.dropdown1').hide();
  }
});
}); 
}

