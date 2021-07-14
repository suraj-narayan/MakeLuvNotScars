function onViewport(el, elClass, offset, callback) {
  var didScroll = false;
  var this_top;
  var height;
  var top;
  
  if(!offset) { var offset = 0; }
 
  $(window).scroll(function() {
      didScroll = true;
  });
 
  setInterval(function() {
    if (didScroll) {
      didScroll = false;
      top = $(this).scrollTop();
 
      $(el).each(function(i){
        this_top = $(this).offset().top - offset;
        height   = $(this).height();
 
        if (top >= this_top && !$(this).hasClass(elClass)) {
          $(this).addClass(elClass);
 
          if (typeof callback == "function") callback(el);
        }
      });
    }
  }, 100);
}

onViewport("#contact", "active", 400, function() {
  $('.team-contact').show();
  $('.team-contact-mid').show();
  $('.team-contact').addClass('animated bounceInLeft');
  $('.team-contact-mid').addClass('animated bounceInUp');
  });

