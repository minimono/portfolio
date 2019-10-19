function loadEvent(){
  $('.loader').fadeOut();
  var $allMsg = $('#title');
  var $wordList = $('#title').html().split("");
  $('#title').html("");
  var $allMsgSub = $('#subtitle');
  var $wordListSub = $('#subtitle').html().split("");
  $('#subtitle').html("");
  $.each($wordList, function(idx, elem){
    if(idx === 10){
      $allMsg.append('<br class="sp">');
    }
    var $newEL = $("<span/>").text(elem).css({opacity: 0});
    $newEL.appendTo($allMsg);
    $newEL.delay(idx * 50 + 100);
    $newEL.animate({opacity: 1 });
  });

  $.each($wordListSub, function(idx, elem){
    var $newEL = $("<span/>").text(elem).css({opacity: 0});
    $newEL.appendTo($allMsgSub);
    $newEL.delay(idx * 20 + 1100);
    $newEL.animate({opacity: 1 });
  });
}

$(window).on('load', loadEvent);

$(function(){
  function scrollEvent(){
    $('.effect-expansion').each(function(){
      var elemPos = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > elemPos - windowHeight){
        $(this).addClass('effect-animation');
      }
    });

    var pos = $(window).scrollTop();
    $('#title').css({top: pos / 3});
    $('#subtitle').css({top: pos / 3});
  }
  $(window).scroll(scrollEvent);
  scrollEvent();

  $('.hamburger').click(function(){
    $('header').toggleClass('open');
    $('header .fa-bars').toggle();
    $('header .fa-times').toggle();
  });

  $('header a').click(function(){
    $('html, body').animate({scrollTop: $($(this).attr('href')).offset().top});
  });

  $('.slider').slick({
    dots: true,
    arrows: false,
    centerMode: true,
    centerPadding: '15%',
    autoplay: true,
    speed: 800
  });
});