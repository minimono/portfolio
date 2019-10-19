$(function(){
  if($(window).scrollTop() > 0){
    $('.effect').addClass('active');
    $('.effectSlow').addClass('active');
  }
  $(window).scroll(function(){
    var windowHeight = $(window).height();
    var scroll = $(window).scrollTop();
    $('.effect').each(function(){
      var targetHeight = $(this).offset().top;
      if(scroll + windowHeight > targetHeight + 150){
        $(this).addClass('active');
      }
    });
    $('.effectSlow').each(function(){
      var targetHeight = $(this).offset().top;
      if(scroll + windowHeight > targetHeight + 400){
        $(this).addClass('active');
      }
    });
  });
  
  function imgResize(){
    if($(window).width() >= 768){
      $('.plan .tab1 .on').attr('src', 'img/tab_01_on_pc.png');
      $('.plan .tab1 .off').attr('src', 'img/tab_01_pc.png');
      $('.plan .tab2 .on').attr('src', 'img/tab_02_on_pc.png');
      $('.plan .tab2 .off').attr('src', 'img/tab_02_pc.png');
      $('.athlete .background2 img').attr('src', 'img/athlete_photo01_pc.png');
    }else{
      $('.plan .tab1 .on').attr('src', 'img/tab_01_on_sp.png');
      $('.plan .tab1 .off').attr('src', 'img/tab_01_sp.png');
      $('.plan .tab2 .on').attr('src', 'img/tab_02_on_sp.png');
      $('.plan .tab2 .off').attr('src', 'img/tab_02_sp.png');
      $('.athlete .background2 img').attr('src', 'img/athlete_photo01_sp.png');
    }
    if($('.plan .tab1').hasClass('active')){
      $('.plan .tab1 .on').show();
      $('.plan .tab1 .off').hide();
      $('.plan .tab2 .on').hide();
      $('.plan .tab2 .off').show();
    }else{
      $('.plan .tab1 .on').hide();
      $('.plan .tab1 .off').show();
      $('.plan .tab2 .on').show();
      $('.plan .tab2 .off').hide();
    }
  }
  imgResize();
  $(window).resize(imgResize);

  $('.tab-child').click(function(){
    var index = $('.tab-child').index($(this));
    $('.tab-child').removeClass('active').eq(index).addClass('active');
    $('.panel-child').removeClass('active').eq(index).addClass('active');
    imgResize();
  })
});