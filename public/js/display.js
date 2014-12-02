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
   $('.randomdeliverylink').val("http://emojicomic.herokuapp.com/comics/" + data.shortid)
   randomComicEdges()
 })
})

function randomComicEdges(){
  var randomRadiusOne = String(Math.floor(Math.random() * 15)) + "px"
  var randomRadiusTwo = String(100 + Math.floor(Math.random() * 30)) + "px"
  var radiusCss = randomRadiusTwo + " " + randomRadiusOne + " / " + randomRadiusOne + " " + randomRadiusTwo
  $('#comic-container').css('border-radius', radiusCss)
}

$(document).on('ready', function(){
  randomComicEdges()
})

