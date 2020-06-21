$(document).ready(function(){

  // if(window.pageYOffset === 0){
  //   $(document).scroll(function(){
  //     if(window.pageYOffset > 0){
  //       $("nav").slideUp("fast");
  //     } else if(window.pageYOffset === 0){
  //       $("nav").slideDown("fast");
  //     };
  //   });
  // };
  //
  // if(window.pageYOffset > 0){
  //   $(window).bind('mousewheel', function(e) {
  //     if (e.originalEvent.wheelDelta === 180) {
  //         $("nav").slideDown("fast");
  //     } else {
  //         $("nav").slideUp("fast");
  //     }
  //   });
  // };


  $(document).scroll(function(event){
    if(window.pageYOffset > 840){
      $("#consultations").removeClass("buttonWinActivated");
      $("#consultations").addClass("buttonLoseActivated");
      $("#ingredients").addClass("buttonWinActivated");
      $("#consultationBox").animate({ opacity: 0 }, 350);
      $("#ingredientBox").animate({ opacity: 1 }, 350);
      $("#img-container").animate({opacity: 1}, 350);
      console.log('scrolled past');
      $(this).off( event );
    }
  });

// consultations/services buttons
  $("#ingredients").mouseenter(function(){
    $("#consultations").removeClass("buttonWinActivated");
    $("#consultations").addClass("buttonLoseActivated");
    $(this).addClass("buttonWinActivated");
    $("#consultationBox").animate({ opacity: 0 }, 350);
    $("#ingredientBox").animate({ opacity: 1 }, 350);
    $("#img-container").animate({opacity: 1}, 350);
  });

  $("#consultations").mouseenter(function(){
    $("#ingredients").removeClass("buttonWinActivated");
    $("#ingredients").addClass("buttonLoseActivated");
    $(this).addClass("buttonWinActivated");
    $("#consultationBox").animate({ opacity: 1 }, 350);
    $("#ingredientBox").animate({ opacity: 0 }, 350);
    $("#img-container").animate({opacity: 0}, 350);
  });


  //animation for *about* header and para
  $(".whoAreWe-h1, .about-text").animate({
    opacity: 1
  }, 2000);

  // animation for services header
  $(document).scroll(function(){
    if(window.pageYOffset > 250){
      $(".services-h1").animate({
        opacity: 1
      }, 1000);
    };
  });

  // animation for contact header
  $(document).scroll(function(){
    if(window.pageYOffset > 1200){
      $(".contact-h1").animate({
        opacity: 1
      }, 1000);
      $(".contact-form-div").animate({
        opacity: 1
      }, 1000)
    };
  });

});
