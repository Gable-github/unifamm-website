$(document).ready(function(){

  $('.navbar-collapse a').click(function(){
    $(".navbar-collapse").collapse('hide');
  });

  function getVerticalScrollPercentage( elm ){
      const p = elm.parentNode,
          pos = (elm.scrollTop || p.scrollTop) / (p.scrollHeight - p.clientHeight ) * 100

      return pos
  }

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
  $(".whoAreWe-h1, .about-text, #about-learn-more").animate({
    opacity: 1
  }, 1000);

  // animation for services header
  $(document).scroll(function(){

    var pos = getVerticalScrollPercentage(document.body);
    console.log(Math.round(pos));

    if(Math.round(pos) > 10){
      $(".services-h1").animate({
        opacity: 1
      }, 1000);
    };
  });

  // animation for contact header and content below
  $(document).scroll(function(){
    var pos = getVerticalScrollPercentage(document.body);
    console.log(Math.round(pos));

    if(Math.round(pos) > 60){
      $(".contact-h1").animate({
        opacity: 1
      }, 1000);
      $(".contact-form-div").animate({
        opacity: 1
      }, 1000)
    };
  });

});
