function translateEverythingToEmoji(){
  $("p, .choice, span, credentials").each(function(){
    var plainText = $(this).text()
    var emojiText = translateFromEnglishToEmoji(plainText)
    $(this).html(emojiText)
  })
 $("p, .choice, span, credentials").css('font-size', '1.1em')
}

$(document).on('ready', function(){

  if(window.chrome){
    $("#translate-header").hide()
  } else {
  $("#translate-header").stickThis()
    $("#translate-button").html("TRANSLATE PAGE")

  translateEverythingToEmoji()
  window.inEmoji = true;
  }

   $(document).on('click', '#translate-button', function(){
    if(window.inEmoji === true){
      translateEverythingToEnglish()
      window.inEmoji = false;
    $(this).html("TRANSLATE PAGE")
    } else {
      translateEverythingToEmoji()
      window.inEmoji = true;
    $(this).html("TRANSLATE PAGE")
    }
 })
})

function translateEverythingToEnglish(){
 $("p, .choice, span, credentials").each(function(){
    var emojiText = $(this).html()
    var plainText = translateFromEmojiToEnglish(emojiText)
    $(this).html(plainText)
  })
 $("p, .choice, span, credentials").css('font-size', '1.5em')


}
