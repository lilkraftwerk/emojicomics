$(document).ready(function(){
  $('.linkz').on('click', 'span', function(){
    var linkTo = $(this).html().toLowerCase()
    $('html, body').animate({
          scrollTop: $("#" + linkTo).offset().top
      }, 2000);
  })
});





