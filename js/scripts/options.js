

function splitTextIntoSmallerPieces(sentence){
  var splitSentence = sentence.split(" ")
  var counter = 0
  for(var i = 0; i < splitSentence.length; i++){
    counter += splitSentence[i].length
    if (counter > 8 && i != splitSentence.length - 1) {
      splitSentence.splice(i, 0, '\n')
      counter = 0;
    }
  }
  return splitSentence.join(" ")
}

function splitTextIntoSmallerPieces(sentence){
  var newSentence = []
  var splitOrigSentence = sentence.split(" ")
  var timeSinceLineSplit = 0
  for(var i = 0; i < splitOrigSentence.length; i++){
    var thisWord = splitOrigSentence[i]
    newSentence.push(thisWord)
    timeSinceLineSplit += thisWord.length
    if (timeSinceLineSplit > 6){
      timeSinceLineSplit = 0
      newSentence.push('\n')
    }
  }
  return newSentence.join(" ")

}


function makeSpeechBubble(inputText){
  var speechDirection = $('input:radio[name=speechtype]:checked').val();
  var speechRaster = new Raster(speechDirection)
  speechRaster.scale(2)
  var text = new PointText();
  text.justification = 'center';
  text.fontSize = getFontSize()
  text.fontFamily = getFontFace()
  text.fillColor = 'black';
  var newText = splitTextIntoSmallerPieces(inputText)
  text.content = newText;
  var group = new Group([speechRaster, text])
  group.position = view.center;
  text.position.y -= 15
}

function getFontSize(){
  var fontSize = $('input[name=fontsize]:checked').val();
  return parseInt(fontSize)
}

function getFontFace(){
  var fontFace = $('input:radio[name=fontface]:checked').val();
  return fontFace
}

$(document).on('change', 'select', function(){
  thisPanel = $(this).attr('id').split("bg")[1]
  makeBackground(thisPanel, $(this).val())
});

$(document).on('click', '#randombg', function(){
  randomBackgrounds()
})

$(document).on('click', '#onerandombg', function(){
  setupRandomBackground()
})


function randomBackgrounds(){
  for(var i = 1; i < 4; i++){
    var index = Math.floor(Math.random() * BACKGROUNDS.length)
    thisBackground = BACKGROUNDS[index].id
    makeBackground(i, thisBackground)
    $("#bg" + i).val(thisBackground)
  }
}


function downloadCanvas(link, canvasId, filename) {
    link.href = document.getElementById(canvasId).toDataURL();
    link.download = filename;
}


$(document).on('click', '#download', function(e){
  var canvas = document.getElementById("myCanvas"), ctx = canvas.getContext("2d");
  var newCanvas = document.getElementById("newCanvas")
  var newContext = newCanvas.getContext("2d")
  newCanvas.height = 310;
  newCanvas.width = 910;
  newContext.drawImage(canvas, 0, 0);
  console.log(newCanvas)
  downloadCanvas(this, 'newCanvas', 'emojicomic.png')
})

