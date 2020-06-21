$(document).ready(function(){

  //first method
  $('.navbar-collapse a').click(function(){
    $(".navbar-collapse").collapse('hide');
  });



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
  }, 1000);

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
