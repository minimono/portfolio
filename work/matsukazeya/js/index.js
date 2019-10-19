$(window).on('load',function(){
  $('.loader').fadeOut();
});

$(function(){
  $('.modal-open').click(function(){
    $('.modal').fadeIn();
  })

  $('.modal-close').click(function(){
    $('.modal').fadeOut();
  })

  if($(window).scrollTop() > 100){
    $('header').fadeIn().css('display', 'flex');
  }
  $(window).scroll(function(){
    if($(window).scrollTop() > 100){
      $('header').fadeIn().css('display', 'flex');
    }else{
      $('header').fadeOut();
    }
  });
});