function populateBackgroundOptions(){
  for(var i = 1; i < 4; i++){
    var thisMenu = $("#bg" + String(i))
    for(var bg = 0; bg < BACKGROUNDS.length; bg++){
      var thisBackground = BACKGROUNDS[bg]
      thisMenu.append("<option class='bgoption' value='" + thisBackground.id + "'>" + thisBackground.name + "</option>")
    }
  }
}
