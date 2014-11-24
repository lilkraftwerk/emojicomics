


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



