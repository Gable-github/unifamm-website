$(document).ready(function(){

  $(".ingredients-page-heading-container-fluid").animate({
    opacity: 1
  }, 1000);

  /// When you click everywhere in the document
  $(document).click(function (event) {

  /// If *navbar-collapse* is not among targets of event
    if (!$(event.target).is('.navbar-collapse *')) {

      /// Collapse every *navbar-collapse*
      $('.navbar-collapse').collapse('hide');

    }
  });

});
