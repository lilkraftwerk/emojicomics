var utilities = project.activeLayer;
var backgroundLayer = new Layer();
var emojiLayer = new Layer();
var boardLayer = new Layer();
emojiLayer.activate()


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

var setUpBoard = function(){
  boardLayer.activate()
  makeLines()
  emojiLayer.activate()
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


function loadAllEmojis(){
  for(var i = 1; i < 600; i++)
    loadEmoji(i)
}

function loadEmoji(id){
$("#emojiChooser").append("<img id='" + id + "' class='emojiIcon' src='emojis/icons/" + id + ".png'>")
}

$("#textGo").on("click", function(){
  makeSpeechBubble($("#textInput").val())
})


var makeTrash = function(){
  utilities.activate()
  var raster = new Raster("trash")
  raster.position = new Point(945, 275)
  emojiLayer.activate()
  return raster
}

var makeRotate = function(){
  utilities.activate()
  var raster = new Raster("rotate")
  raster.position = new Point(945, 211)
  emojiLayer.activate()
  return raster
}

var makeDown = function(){
    utilities.activate()
  var raster = new Raster("down")
  raster.position = new Point(945, 147)
  emojiLayer.activate()
  return raster
}

var makeUp = function(){
  utilities.activate()
  var raster = new Raster("up")
  raster.position = new Point(945, 83)
  emojiLayer.activate()
  return raster
}

var trash = makeTrash()
var rotate = makeRotate()
var up = makeUp()
var down = makeDown()


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


function onMouseDown(event){
  if(event.item){
    if(isOnEmojiLayer(event.item)){
      currentEmoji = event.item;
    }
  }
}

function isUtility(item){
  return utilities.isChild(item)
}

function isOnEmojiLayer(item){
  return emojiLayer.isChild(item)
}

function onMouseDrag(event) {
  currentEmoji.position = event.point;
}

function onMouseUp(event){
  if(checkForTrash(currentEmoji)){
    removeAndDrawCloud(currentEmoji)
  }
  currentEmoji = null;
}

function removeAndDrawCloud(item){
  clouds.push(new Cloud(item.position))
  item.remove()
}

function checkForTrash(item){
  if(item.position.isInside(trash.bounds)){
    return true
  } else {
    return false
  }
}



loadAllEmojis()


$(".emojiIcon").on("click", function(){
  var thisID = $(this).attr('id')
  var newID = "img" + thisID
  var imgString = "<img id='" + newID + "' src='emojis/" + thisID + ".png'>"
  $("#images").append(imgString)
  var raster = new Raster(newID)
  raster.position = view.center
})

function Cloud(position){
  this.raster = new Raster("clouds")
  this.raster.position = position
  this.lifespan = 10;
  this.draw = function(){
    this.raster.scale(1.1)
    this.raster.position.y -= 1;
    this.lifespan -= 1;
  }
}

function makeCloud(position){
  clouds.push(new Cloud(position))
}

clouds = []

function drawClouds(){
  for(var i = 0; i < clouds.length; i++){
    var thisCloud = clouds[i]
    thisCloud.draw()
    if(thisCloud.lifespan === 0){
      thisCloud.raster.remove()
      clouds.splice(i, 1)
    }
  }
}

function rotateEmoji(){
  if(currentEmoji){
    if(currentEmoji.position.isInside(rotate)){
    currentEmoji.rotate(3)

    }
  }
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


function onFrame(event){
  drawClouds()
  scaleEmoji()
  rotateEmoji()
}

var BG_LOCATIONS = [[152, 155],[450, 155],[752, 155]]
var BACKGROUNDS = ['bgStatic', 'bgSpace', 'bgJungle', 'bgWave']

function makeBackground(panel, image){
  backgroundLayer.activate()
  var raster = new Raster(image)
  raster.position = BG_LOCATIONS[panel - 1]
  emojiLayer.activate()
}

setUpBoard()
for(var i = 1; i < 4; i++){
console.log(BACKGROUNDS)
  var index = Math.floor(Math.random() * BACKGROUNDS.length)
  makeBackground(i, BACKGROUNDS[index])
}

