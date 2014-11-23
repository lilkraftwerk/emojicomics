function makeEmoji(id){
  var raster = new Raster(id)
  raster.position = [Math.floor(Math.random() * view.viewSize.width), Math.floor(Math.random() * view.viewSize.height), ];
}

var randomEmojis = function(){
  var thisEmoji = Math.floor(Math.random() * 846)
  $("#images").append("<img src='emojis/" + thisEmoji + ".png' id='img" + thisEmoji + "'>" )
  var id = "img" + thisEmoji
  makeEmoji(id)
}

var makeLines = function(){
var rect = new Path.Rectangle([5, 5], [900, 300])
rect.strokeColor = 'black';
rect.strokeWidth = 5;
var from = new Point(300, 5);
var to = new Point(300, 305);
var path = new Path.Line(from, to);
path.strokeColor = 'black';
path.strokeWidth = 5;
var from = new Point(600, 5);
var to = new Point(600, 305);
var path = new Path.Line(from, to);
path.strokeColor = 'black';
path.strokeWidth = 5;
}

makeLines()

randomEmojis()
randomEmojis()


$("#textGo").on("click", function(){
  makeSpeechBubble($("#textInput").val())
})



var makeSpeechBubble = function(inputText){
  var speechDirection = $('input:radio[name=speechtype]:checked').val();
  var position = new Point(100, 100)
  console.log(speechDirection)
  var speechRaster = new Raster(speechDirection)
  speechRaster.scale(2)
  console.log(speechRaster.bounds)
  var text = new PointText();
  text.justification = 'center';
  text.fontSize = 15;
  text.fillColor = 'black';
  text.content = inputText;
  var group = new Group([speechRaster, text])
  group.position = view.center;
}



var currentEmoji;

makeEmoji('img656')

function onMouseDown(event){
  currentEmoji = event.item
}

function onMouseDrag(event) {
  currentEmoji.position = event.point;
}

function onMouseUp(event){
  currentEmoji = null;
}