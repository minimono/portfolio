$(function(){
  $('header').click(function(){
    if($(window).width() <= 1000){
      $(this).toggleClass('open');
    }
  });
  $('header nav').click(function(e){
    e.stopPropagation();
  })
  $('.backtop').click(function(){
    $('html,body').animate({scrollTop: $('#header').offset().top}, 1000);
  });
});