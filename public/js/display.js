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
   updateTwitterValues("http://emoji.vision/comics/" + data.shortid, 'Way Cool #EmojiComic')
   $('.deliverylink').attr('href', "http://emoji.vision/comics/" + data.shortid)
 })
})

function updateTwitterValues(share_url, title) {
  $('#twitbutt').html('&nbsp;');
  $('#twitbutt').html('<a href="https://twitter.com/share" class="twitter-share-button" data-url="' + share_url +'" data-text="' + title + '" data-count="none">Tweet</a>');
twttr.widgets.load();
}


