$(document).on("click", '#textGo', function(){
  makeSpeechBubble($("#textInput").val())
})



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

function onFrame(event){
  drawClouds()
  scaleEmoji()
  rotateEmoji()
  showNumberOfLoadedEmojis()
}



$("#flipEmojis").on('click', function(){
  if(flipped === false){
    flipped = true;
    $("#emojiChooser").children('img').addClass('flipped')
    $("#flipEmojis").children('img').attr("src", "/emojis/leftarrow.png")
  } else {
    flipped = false;
    $("#emojiChooser").children('img').removeClass('flipped')
    $("#flipEmojis").children('img').attr("src", "/emojis/rightarrow.png")

  }
})



$("#emojiChooser").on("click", 'img', function(){
  var thisID = $(this).attr('id')
  var raster = new Raster(thisID)
  if(flipped === true){
  raster.scale(-1, 1)
  }
  raster.position = view.center
  addRecent(thisID)
  makeCloud(raster.position)
})

$("#recent").on("click", 'img', function(){
  var thisID = $(this).attr('data-recent')
  var raster = new Raster(thisID)
  raster.position = view.center
  makeCloud(raster.position)
})



function addRecent(id){
  if(!_.contains(recents, id)){
    if(recents.length < 10){
      addImageToRecents(id)
    } else {
      $("#recent").children('img').first().fadeOut().remove()
      recents.shift
      addImageToRecents(id)
    }
  }
}

function addImageToRecents(id){
  recents.push(id)
  imageCopy = $("<img>").attr('data-recent', id)
  imageCopy.attr('src', '/emojis/' + id + '.png')
  imageCopy.addClass('recentMoji')
  $("#recent").append($(imageCopy))
}

$(".optionicon").on('click', function(){
  var optionsToUse = $(this).attr("data-click")
  $("#options").html($("#" + optionsToUse).html())
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

