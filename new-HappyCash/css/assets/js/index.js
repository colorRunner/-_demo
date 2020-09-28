$(function() {
  var wheight = $(window).height();
  var nowAt = window.location.pathname;
  var high = 58;
  var wwidth = $(window).width();
  $('#mainnavbar').addClass('d-none');
  // resize background image on section 1, based on window width and height
  function resizebgimg() {
    wwidth = $(window).width();
    var wwheight = wheight;
    if (wwheight < 600) wwheight = 600;
    // $("#section1").css("height",wwheight+"px");
    // $("#section1").css("background-size",wwidth+"px "+wwheight+"px");
  }

  if (wwidth > 980) {
    $('#mainnavbar').addClass('d-none');
    $('#fakemainnavbar').removeClass('d-none');
  } else {
    $('#mainnavbar').removeClass('d-none');
    $('#fakemainnavbar').addClass('d-none');
  }
  $(window).scroll(function() {
    var wwidth = $(window).width();
    if (wwidth > 980) {
      if (window.pageYOffset > high) {
        $('#mainnavbar').removeClass('d-none');
        // $('#fakemainnavbar').addClass('d-none');
      } else {
        $('#mainnavbar').addClass('d-none');
        // $('#fakemainnavbar').removeClass('d-none');
      }
    }
  });
  $(window).resize(function() {
    resizebgimg();
  });
  resizebgimg();
  
  $(".menuSecond").addClass('menuFocusClass');
	
  

  

  var curStep = 1;
  $('.arrows .next').click(function() {
    curStep = curStep === 4 ? 1 : ++curStep;
    $('.steps .step').hide();
    $('.steps .step:nth-child(' + curStep + ')').show();
  });
  $('.arrows .pre').click(function() {
    curStep = curStep === 1 ? 4 : --curStep;
    $('.steps .step').hide();
    $('.steps .step:nth-child(' + curStep + ')').show();
  });

  var _curStep = 2;
  setInterval(function() {
    _curStep = _curStep === 5 ? 2 : ++_curStep;
	console.log(_curStep);
    $('.step-container').removeClass('active');
    $('.step-container:nth-child(' + _curStep + ')').addClass('active');
    var currentImgUrl = "css/assets/img/index/phonecampaign"+ _curStep +".png";
    $("#slidePhoneImg").attr("src",currentImgUrl);
	
  }, 1500);
});
