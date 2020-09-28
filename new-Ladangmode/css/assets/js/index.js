$(function() {
  var wheight = $(window).height();
  var nowAt = window.location.pathname;
  var high = 58;
  var percent = 35;
  var wwidth = $(window).width();
  $('#mainnavbar').addClass('d-none');
  // resize background image on section 1, based on window width and height
  function resizebgimg() {
    wwidth = $(window).width();
    var wwheight = wheight;
    if (wwheight < 600) wwheight = 600;
    // $("#section1").css("height",wwheight+"px");
    // $("#section1").css("background-size",wwidth+"px "+wwheight+"px");
    if (wwidth <= 575) {
      animate_left_value = 99;
      percent = 120;
    } else if (wwidth <= 980) {
      animate_left_value = 49;
      percent = 120;
    } else {
      animate_left_value = 33;
    }
  }

  if (wwidth > 980) {
    $('#mainnavbar').addClass('d-none');
    $('#fakemainnavbar').removeClass('d-none');
    
    $(".footer-container-mobile").hide();
    $(".footer-container").show();
    
    
  } else {
    $('#mainnavbar').removeClass('d-none');
    $('#fakemainnavbar').addClass('d-none');
    
    $(".footer-container-mobile").show();
    $(".footer-container").hide();
  }
  
  $(window).scroll(function() {
    var wwidth = $(window).width();
    if (wwidth > 980) {
      if (window.pageYOffset > high) {
        $('#mainnavbar').removeClass('d-none');
        // $('#fakemainnavbar').addClass('d-none');
        
        $(".footer-container-mobile").hide();
        $(".footer-container").show();
        
      } else {
        $('#mainnavbar').addClass('d-none');
        // $('#fakemainnavbar').removeClass('d-none');
        
        $(".footer-container-mobile").show();
        $(".footer-container").hide();
      }
    }
  });
  $(window).resize(function() {
    resizebgimg();
  });
  resizebgimg();
//  $(".container-arrow-left").addClass('slideArrowOpacity');
	
  $(".menuFirst").addClass('menuFocusClass');
  
  

  
  

  
});
