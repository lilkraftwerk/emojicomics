


function makeSpeechBubble(inputText){
  var speechDirection = $('input:radio[name=speechtype]:checked').val();
  var speechRaster = new Raster(speechDirection)
  speechRaster.scale(2)
  var text = new PointText();
  text.justification = 'center';
  text.fontSize = getFontSize()
  text.fontFamily = getFontFace()
  text.fillColor = 'black';
  text.content = inputText;
  var group = new Group([speechRaster, text])
  group.position = view.center;
}

function getFontSize(){
  var fontSize = $('input[name=fontsize]:checked').val();
  return parseInt(fontSize)
}

function getFontFace(){
  var fontFace = $('input:radio[name=fontface]:checked').val();
  console.log(fontFace)
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




$(document).on('click', '#btn-download', function(){
  var thisCanvas = saveCanvasToFile()
  downloadCanvas(this, thisCanvas, "sup.png")
})

function saveCanvasToFile(){
  var canvas = document.getElementById("myCanvas"), ctx = canvas.getContext("2d");
  var newCanvas = document.createElement("canvas")
  var newContext = newCanvas.getContext("2d")
  newCanvas.height = 310;
  newCanvas.width = 910;
  newContext.drawImage(canvas, 0, 0);
  newCanvas.toBlob(function(blob) {
    saveAs(blob, "prettyimage.png");
  }, "image/png");

}


$(document).on('click', '#download', function(e){
  e.preventDefault()
  console.log("sup")
  downloadCanvas(document.getElementById('download'), 'myCanvas', 'sup.png')
})

function downloadCanvas(link, canvasId, filename) {
    link.href = document.getElementById(canvasId).toDataURL();
    link.download = filename;
}
