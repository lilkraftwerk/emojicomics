$(document).ready(function(){
  $("#moreinfo").click(function() {
    $('html, body').animate({
        scrollTop: $("#visionpage").offset().top - 50
    }, 2000);
});

  $('.navbar-nav').on('click', 'a', function(e){
    e.preventDefault()
    var scrollTo = "#" + $(this).attr('data-scroll')
     $('html, body').animate({
        scrollTop: $(scrollTo).offset().top - 50
    }, 2000);
  })

   $('#main-anchor').on('click', 'a', function(e){
    e.preventDefault();
     $('html, body').animate({
        scrollTop: $("#splash").offset().top - 50
    }, 2000);
  })

   $('body').scrollspy({ target: '.navbar-collapse' })

});





