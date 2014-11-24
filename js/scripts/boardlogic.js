
$(".optionicon").on('click', function(){
  var optionsToUse = $(this).attr("data-click")
  $("#options").html($("#" + optionsToUse).html())
})


function makeSpeechBubble(inputText){
  var speechDirection = $('input:radio[name=speechtype]:checked').val();
  var position = new Point(100, 100)
  console.log(speechDirection)
  var speechRaster = new Raster(speechDirection)
  speechRaster.scale(2)
  var text = new PointText();
  text.justification = 'center';
  text.fontSize = 15;
  text.fontFamily = 'Pacifico'
  text.fillColor = 'black';
  text.content = inputText;
  var group = new Group([speechRaster, text])
  group.position = view.center;
}


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