$(document).ready(function(){

  function getVerticalScrollPercentage( elm ){
      const p = elm.parentNode,
          pos = (elm.scrollTop || p.scrollTop) / (p.scrollHeight - p.clientHeight ) * 100

      return pos
  }

  $(".page-container-1").animate({
      opacity: 1
    }, 1000);


  $(document).scroll(function(){
    var pos = getVerticalScrollPercentage(document.body);
    console.log(Math.round(pos));

    if(Math.round(pos) > 28){
      $("#row1").animate({
        opacity: 1
      }, 1000);
    };
  });

  $(document).scroll(function(){
    var pos = getVerticalScrollPercentage(document.body);
    if(Math.round(pos) > 44){
      $("#supplierLogo1").animate({
        opacity: 1
      }, 1000);
      setTimeout(function(){
        $("#supplierLogo2").animate({
          opacity: 1
        }, 1000);
      }, 300);
      setTimeout(function(){
        $("#supplierLogo3").animate({
          opacity: 1
        }, 1000);
      }, 600);
    }
  });

  $(document).scroll(function(){
    var pos = getVerticalScrollPercentage(document.body);

    if(Math.round(pos) > 58){
      $("#row3").animate({
        opacity: 1
      }, 1000);
    };
  });

  $(document).scroll(function(){
    var pos = getVerticalScrollPercentage(document.body);

    if(Math.round(pos) > 75){
      $("#row4").animate({
        opacity: 1
      }, 1000);
    };
  });

  /// When you click everywhere in the document
  $(document).click(function (event) {

  /// If *navbar-collapse* is not among targets of event
    if (!$(event.target).is('.navbar-collapse')) {

      /// Collapse every *navbar-collapse*
      $('.navbar-collapse').collapse('hide');

    };
  });

});
