$(function(){
  var count = 0;
  var interval = 7000;
  setInterval(function(){
    var speed = 2000; 
    var $slide = $('.top .slide');
    var length = $slide.length-1;
    $slide.eq(count).fadeOut(speed);
    if ( count >= length ) {
      count = 0;
    } else {
      count++;
    }
    $slide.eq(count).fadeIn(speed);
  }, 5000);

  $('.scroll').click(function(){
    $('html,body').animate({scrollTop: $($(this).attr('href')).offset().top});
  });
});