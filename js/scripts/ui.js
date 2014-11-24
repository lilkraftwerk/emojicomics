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
}





$("#emojiChooser").on("click", '.emojiIcon', function(){
  var thisID = $(this).attr('id')
  var raster = new Raster(thisID)
  raster.position = view.center
})



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
