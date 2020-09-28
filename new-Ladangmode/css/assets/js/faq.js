$(function() {
	
  $('#faqoption').off('click', 'li');
  $('#faqoption').on('click', 'li', function(e) {
    e.stopPropagation();
    e.preventDefault();
    $('#faqoption li').removeClass('active');
    $(this).addClass('active');
	var index = $(this).index();
	$(this).parents(".col").siblings().find(".header").removeClass("focusClass");
	$(this).parents(".col").siblings().find("li").removeClass("focusClass");
	$(this).parents(".col").find(".header").addClass("focusClass");
	$(this).siblings().removeClass("focusClass");
	$(this).addClass("focusClass");
	
	if(index == 1){
		$(this).siblings().addClass("focusClass");
	}
    var href = $(this)
      .children('a')
      .attr('href');
    $('#faqcontent')
      .children('div')
      .fadeOut(100);
    $(href).fadeIn(200);
  });
  
});
