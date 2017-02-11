$(document).ready(function() {

	$('.slider-works').slick({
		  dots: true,
		  slidesToShow: 1,
  		slidesToScroll: 1,
  		arrows: true,
      slide: "img",
      prevArrow: ".slider-prev2",
      nextArrow: ".slider-next2"
	});
	$('.slider-wrap').slick({
		slidesToShow: 3,
  		slidesToScroll: 1,
  		arrows: true,
  		slide: "div",
  		prevArrow: ".slider-prev1",
  		nextArrow: ".slider-next1",
      responsive: [{
        breakpoint: 1024,
        settings: {
        slidesToShow: 2
        }
      },
      {
        breakpoint: 780,
        settings: {
        slidesToShow: 1
        }
      }
    ]
	});

  function isStrEmpty(str){
    return (str.length == 0);
  }
  
  $(document).on('keyup', '.validate', function(e){
    
    if ( isStrEmpty( $(this).val() ) ){
      $(this).addClass('has-error');    
    } else {
      $(this).removeClass('has-error');
    }
    
  });

  $(document).on('click', '#submit', function(e){
    e.preventDefault();
    var user_email_input  = $('#InputEmail'),
        user_name_input   = $('#InputName');

        var user_email    = user_email_input.val().trim(), 
            user_name   = user_name_input.val().trim();
    
   
      user_email_input.val(user_email);
      user_name_input.val(user_name);
    
    var validated = true;
    
    if ( isStrEmpty(user_name) ){     
      user_name_input.addClass('has-error');
      validated = false;
    } else {
      user_name_input.removeClass('has-error');
    }

    if ( isStrEmpty(user_email) ){
      user_email_input.addClass('has-error');
      validated = false;
    } else {
      user_email_input.removeClass('has-error');
    }
    
  });
});
$(window).scroll(function() {
    if($(document).scrollTop() > 50){
      $('nav').addClass('scroll-menu');
    }
    else{
      $('nav').removeClass('scroll-menu');
    }
});
(function($) {
$(function() {

  $('#up').click(function() {
    $('html, body').animate({scrollTop: 0},500);
    return false;
  })

})
})(jQuery)