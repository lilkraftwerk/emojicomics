
$(".optionicon").on('click', function(){
  $('.optionicon').removeClass("active")
  $(this).addClass('active')
  var optionsToUse = $(this).attr("data-click")
  $("#options").html($("#" + optionsToUse).html())
})




function scaleEmoji(){
  if(currentEmoji){
    if(currentEmoji.position.isInside(up) && currentEmoji.getBounds().height < 125){
    currentEmoji.scale(1.01)
    }
    if(currentEmoji.position.isInside(down) && currentEmoji.getBounds().height > 25){
    currentEmoji.scale(.99)
    }
  }
}



function makeBackground(panel, image){
  backgroundLayer.activate()
  var raster = new Raster(image)
  raster.position = BG_LOCATIONS[panel - 1]
  emojiLayer.activate()
}




function rotateEmoji(){
  if(currentEmoji){
    if(currentEmoji.position.isInside(rotate)){
    currentEmoji.rotate(3)

    }
  }
}