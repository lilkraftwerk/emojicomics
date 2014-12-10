$("#showme").on("click", function(){
  console.log("clicked show a comic")
})



$(document).on('click', '#showme', function(){
$.ajax({
   url: '/comics/' + comicID,
   type: 'GET'
 }).done(function(data){
   $('#comic').html('<img src="' + data[0].img + '" />');
 })
})





$(document).on('click', '#anotherRandom', function(){
  $("#comic").html("<img src='/img/loadingcomic.png'>")
  $("#anotherRandom").addClass('inactive')
$.ajax({
   url: '/comics/randomcomic',
   type: 'GET'
 }).done(function(data){
   $('#anotherRandom').removeClass('inactive')
   $('#comic').html('<img src="' + data.img + '" />');
   $("#author").html(data.author)
   $("#date").html(data.date)
   $('.deliverylink').attr('href', "http://emoji.vision/comics/" + data.shortid)
 })
})

