// create multiple layers for paper.js
var utilities = project.activeLayer;
var backgroundLayer = new Layer();
var emojiLayer = new Layer();
var boardLayer = new Layer();
emojiLayer.activate()

// global variables for board utilities
var trash = makeTrash()
var rotate = makeRotate()
var up = makeUp()
var down = makeDown()

// global current emoji var
var currentEmoji;

// storage for all current clouds
clouds = []

// background constants
var BG_LOCATIONS = [[152, 155],[450, 155],[752, 155]]
var BACKGROUNDS = ['bgStatic', 'bgSpace', 'bgJungle', 'bgWave', 'bgPinkBlue']

// set everything up
setUpBoard()

function setUpBoard(){
  boardLayer.activate()
  makeLines()
  emojiLayer.activate()
  loadAllEmojis()
}


function loadAllEmojis(){

$.imgpreload(allImages,
{
    each: function()
    {
      var thisImage = $(this)
      console.log(thisImage)
      console.log('sup')
      var number = thisImage.attr('src').split('.')[0].split("/")[1]
      console.log(number)
      thisImage.addClass('emojiIcon').attr('id', number)
      $("#emojiChooser").append(thisImage).hide().fadeIn()
        // this = dom image object
        // check for success with: $(this).data('loaded')
        // callback executes on every image load


    },
    all: function()
    {
        // this = array of dom image objects
        // check for success with: $(this[i]).data('loaded')
        // callback executes when all images are loaded
    }
});
}




function makeLines(){
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



function makeTrash(){
  utilities.activate()
  var raster = new Raster("trash")
  raster.position = new Point(945, 275)
  emojiLayer.activate()
  return raster
}

function makeRotate(){
  utilities.activate()
  var raster = new Raster("rotate")
  raster.position = new Point(945, 211)
  emojiLayer.activate()
  return raster
}

function makeDown(){
    utilities.activate()
  var raster = new Raster("down")
  raster.position = new Point(945, 147)
  emojiLayer.activate()
  return raster
}

function makeUp(){
  utilities.activate()
  var raster = new Raster("up")
  raster.position = new Point(945, 83)
  emojiLayer.activate()
  return raster
}





function makeEmoji(id){
  var raster = new Raster(id)
  raster.position = [Math.floor(Math.random() * view.viewSize.width), Math.floor(Math.random() * view.viewSize.height), ];
}

function randomEmojis(){
  var thisEmoji = Math.floor(Math.random() * 846)
  $("#images").append("<img src='emojis/" + thisEmoji + ".png' id='img" + thisEmoji + "'>" )
  var id = "img" + thisEmoji
  makeEmoji(id)
}


