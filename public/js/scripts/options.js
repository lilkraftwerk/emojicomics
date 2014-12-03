

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
    if (timeSinceLineSplit > 15){
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
  console.log(speechRaster.bounds)
  console.log(text.bounds)
  while(speechRaster.bounds.height < text.bounds.height + 100){
    speechRaster.scale(1, 1.2)
    text.position.y -= 12
  }
    while(speechRaster.bounds.width < text.bounds.width + 40){
    speechRaster.scale(1.2, 1)
  }
  console.log('speech')
  console.log(speechRaster.position)
  console.log(speechRaster.bounds)
  console.log('text')
  console.log(text.position)
  console.log(text.bounds)
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

function sendCanvasToServer(){
  var canvas = document.getElementById('newCanvas');
  var dataURL = canvas.toDataURL();
  var jsonData = JSON.stringify({author: $("#authorname").val(), img: dataURL});
  console.log("here")
  $.ajax({
      url: '/comics',
      type: 'POST',
      contentType: 'application/json',
      dataType: 'json',
      data: jsonData
    }).success(function(data){
      showShortUrl(data)
    })
}

function checkForHeroku(){
  var full = window.location.protocol + "//" + window.location.host
  return full
 }

function FormatShortUrl(data){
  var check = checkForHeroku()
  var url = checkForHeroku() + '/comics/' + data.shortID
  var newURL = $("<a>Check Out Yr Comic</a>").attr("href", url).addClass('viewlink')
  var textURL = $("<input type='text'>").attr("value", url).addClass('viewtextbox')
  return [newURL, textURL]
}

function showShortUrl(data){
  var newURL = FormatShortUrl(data)[0]
  var url = FormatShortUrl(data)[1]
  $("#download").html("<div id='downloadlinks'></div>")
  $("#downloadlinks").prepend(newURL)
  $("#downloadlinks").append(url)
  $("#authorname").hide()
}

function isArtistNameEmpty(){
  return ($("#authorname").val().length > 0)
}

function trimCanvas(){
  var canvas = document.getElementById("myCanvas"), ctx = canvas.getContext("2d");
  var newCanvas = document.getElementById("newCanvas")
  var newContext = newCanvas.getContext("2d")
  newCanvas.height = 310;
  newCanvas.width = 910;
  // newCanvas.height = 310 * window.devicePixelRatio;
  // newCanvas.width = 910 * window.devicePixelRatio;
  newContext.drawImage(canvas, 0, 0);
}


$(document).on('click', '.downloadbutton', function(e){
  if (isArtistNameEmpty() === true){
  $("#authorname").hide()
  $("#download").html('<div id="loadingscreen"><img src="/img/moonspin.gif"><p>LOADING...</p></div>')
  trimCanvas()
  sendCanvasToServer()
  $("#optionsbar").html("<div class='optionicon'><img src='/emojis/656.png'></div><div class='optionicon'><img src='/emojis/656.png'></div><div class='optionicon'><img src='/emojis/656.png'></div><div class='optionicon'><img src='/emojis/656.png'></div>")
  } else
  {
    $("#authorname").attr("placeholder", "enter a name you jabroni")
  }
})


function checkAuthorName(){
  if (isArtistNameEmpty() === true){
    $(".downloadbutton").removeClass('inactive')
  } else {
    $(".downloadbutton").addClass('inactive')
  }
}

var timer = setInterval(checkAuthorName, 10)


