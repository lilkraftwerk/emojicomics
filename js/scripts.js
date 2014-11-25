

$(".optionicon").on('click', function(){
  $('.optionicon').removeClass("active")
  $(this).addClass('active')
  var optionsToUse = $(this).attr("data-click")
  $("#options").html($("#" + optionsToUse).html())
})




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



function makeBackground(panel, image){
  backgroundLayer.activate()
  var raster = new Raster(image)
  raster.position = BG_LOCATIONS[panel - 1]
  emojiLayer.activate()
}




function rotateEmoji(){
  if(currentEmoji){
    if(currentEmoji.position.isInside(rotate)){
    currentEmoji.rotate(3)

    }
  }
}
allImages = ["emojis/656.png", "emojis/1.png", "emojis/2.png", "emojis/3.png", "emojis/4.png", "emojis/5.png", "emojis/6.png", "emojis/7.png", "emojis/8.png", "emojis/9.png", "emojis/10.png", "emojis/11.png", "emojis/12.png", "emojis/13.png", "emojis/14.png", "emojis/15.png", "emojis/16.png", "emojis/17.png", "emojis/18.png", "emojis/19.png", "emojis/20.png", "emojis/21.png", "emojis/22.png", "emojis/23.png", "emojis/24.png", "emojis/25.png", "emojis/26.png", "emojis/27.png", "emojis/28.png", "emojis/29.png", "emojis/30.png", "emojis/31.png", "emojis/32.png", "emojis/33.png", "emojis/34.png", "emojis/35.png", "emojis/36.png", "emojis/37.png", "emojis/38.png", "emojis/39.png", "emojis/40.png", "emojis/41.png", "emojis/42.png", "emojis/43.png", "emojis/44.png", "emojis/45.png", "emojis/46.png", "emojis/47.png", "emojis/48.png", "emojis/49.png", "emojis/50.png", "emojis/51.png", "emojis/52.png", "emojis/53.png", "emojis/54.png", "emojis/55.png", "emojis/56.png", "emojis/57.png", "emojis/58.png", "emojis/59.png", "emojis/60.png", "emojis/61.png", "emojis/62.png", "emojis/63.png", "emojis/64.png", "emojis/65.png", "emojis/66.png", "emojis/67.png", "emojis/68.png", "emojis/69.png", "emojis/70.png", "emojis/71.png", "emojis/72.png", "emojis/73.png", "emojis/74.png", "emojis/75.png", "emojis/76.png", "emojis/77.png", "emojis/78.png", "emojis/79.png", "emojis/80.png", "emojis/81.png", "emojis/82.png", "emojis/83.png", "emojis/84.png", "emojis/85.png", "emojis/86.png", "emojis/87.png", "emojis/88.png", "emojis/89.png", "emojis/90.png", "emojis/91.png", "emojis/92.png", "emojis/93.png", "emojis/94.png", "emojis/95.png", "emojis/96.png", "emojis/97.png", "emojis/98.png", "emojis/99.png", "emojis/100.png", "emojis/101.png", "emojis/102.png", "emojis/103.png", "emojis/104.png", "emojis/105.png", "emojis/106.png", "emojis/107.png", "emojis/108.png", "emojis/109.png", "emojis/110.png", "emojis/111.png", "emojis/112.png", "emojis/113.png", "emojis/114.png", "emojis/115.png", "emojis/116.png", "emojis/117.png", "emojis/118.png", "emojis/119.png", "emojis/120.png", "emojis/121.png", "emojis/122.png", "emojis/123.png", "emojis/124.png", "emojis/125.png", "emojis/126.png", "emojis/127.png", "emojis/128.png", "emojis/129.png", "emojis/130.png", "emojis/131.png", "emojis/132.png", "emojis/133.png", "emojis/134.png", "emojis/135.png", "emojis/136.png", "emojis/137.png", "emojis/138.png", "emojis/139.png", "emojis/140.png", "emojis/141.png", "emojis/142.png", "emojis/143.png", "emojis/144.png", "emojis/145.png", "emojis/146.png", "emojis/147.png", "emojis/148.png", "emojis/149.png", "emojis/150.png", "emojis/151.png", "emojis/152.png", "emojis/153.png", "emojis/154.png", "emojis/155.png", "emojis/156.png", "emojis/157.png", "emojis/158.png", "emojis/159.png", "emojis/160.png", "emojis/161.png", "emojis/162.png", "emojis/163.png", "emojis/164.png", "emojis/165.png", "emojis/166.png", "emojis/167.png", "emojis/168.png", "emojis/169.png", "emojis/170.png", "emojis/171.png", "emojis/172.png", "emojis/173.png", "emojis/174.png", "emojis/175.png", "emojis/176.png", "emojis/177.png", "emojis/178.png", "emojis/179.png", "emojis/180.png", "emojis/181.png", "emojis/182.png", "emojis/183.png", "emojis/184.png", "emojis/185.png", "emojis/186.png", "emojis/187.png", "emojis/188.png", "emojis/189.png", "emojis/190.png", "emojis/191.png", "emojis/192.png", "emojis/193.png", "emojis/194.png", "emojis/195.png", "emojis/196.png", "emojis/197.png", "emojis/198.png", "emojis/199.png", "emojis/200.png", "emojis/201.png", "emojis/202.png", "emojis/203.png", "emojis/204.png", "emojis/205.png", "emojis/206.png", "emojis/207.png", "emojis/208.png", "emojis/209.png", "emojis/210.png", "emojis/211.png", "emojis/212.png", "emojis/213.png", "emojis/214.png", "emojis/215.png", "emojis/216.png", "emojis/217.png", "emojis/218.png", "emojis/219.png", "emojis/220.png", "emojis/221.png", "emojis/222.png", "emojis/223.png", "emojis/224.png", "emojis/225.png", "emojis/226.png", "emojis/227.png", "emojis/228.png", "emojis/229.png", "emojis/230.png", "emojis/231.png", "emojis/232.png", "emojis/233.png", "emojis/234.png", "emojis/235.png", "emojis/236.png", "emojis/237.png", "emojis/238.png", "emojis/239.png", "emojis/240.png", "emojis/241.png", "emojis/242.png", "emojis/243.png", "emojis/244.png", "emojis/245.png", "emojis/246.png", "emojis/247.png", "emojis/248.png", "emojis/249.png", "emojis/250.png", "emojis/251.png", "emojis/252.png", "emojis/253.png", "emojis/254.png", "emojis/255.png", "emojis/256.png", "emojis/257.png", "emojis/258.png", "emojis/259.png", "emojis/260.png", "emojis/261.png", "emojis/262.png", "emojis/263.png", "emojis/264.png", "emojis/265.png", "emojis/266.png", "emojis/267.png", "emojis/268.png", "emojis/269.png", "emojis/270.png", "emojis/271.png", "emojis/272.png", "emojis/273.png", "emojis/274.png", "emojis/275.png", "emojis/276.png", "emojis/277.png", "emojis/278.png", "emojis/279.png", "emojis/280.png", "emojis/281.png", "emojis/282.png", "emojis/283.png", "emojis/284.png", "emojis/285.png", "emojis/286.png", "emojis/287.png", "emojis/288.png", "emojis/289.png", "emojis/290.png", "emojis/291.png", "emojis/292.png", "emojis/293.png", "emojis/294.png", "emojis/295.png", "emojis/296.png", "emojis/297.png", "emojis/298.png", "emojis/299.png", "emojis/300.png", "emojis/301.png", "emojis/302.png", "emojis/303.png", "emojis/304.png", "emojis/305.png", "emojis/306.png", "emojis/307.png", "emojis/308.png", "emojis/309.png", "emojis/310.png", "emojis/311.png", "emojis/312.png", "emojis/313.png", "emojis/314.png", "emojis/315.png", "emojis/316.png", "emojis/317.png", "emojis/318.png", "emojis/319.png", "emojis/320.png", "emojis/321.png", "emojis/322.png", "emojis/323.png", "emojis/324.png", "emojis/325.png", "emojis/326.png", "emojis/327.png", "emojis/328.png", "emojis/329.png", "emojis/330.png", "emojis/331.png", "emojis/332.png", "emojis/333.png", "emojis/334.png", "emojis/335.png", "emojis/336.png", "emojis/337.png", "emojis/338.png", "emojis/339.png", "emojis/340.png", "emojis/341.png", "emojis/342.png", "emojis/343.png", "emojis/344.png", "emojis/345.png", "emojis/346.png", "emojis/347.png", "emojis/348.png", "emojis/349.png", "emojis/350.png", "emojis/351.png", "emojis/352.png", "emojis/353.png", "emojis/354.png", "emojis/355.png", "emojis/356.png", "emojis/357.png", "emojis/358.png", "emojis/359.png", "emojis/360.png", "emojis/361.png", "emojis/362.png", "emojis/363.png", "emojis/364.png", "emojis/365.png", "emojis/366.png", "emojis/367.png", "emojis/368.png", "emojis/369.png", "emojis/370.png", "emojis/371.png", "emojis/372.png", "emojis/373.png", "emojis/374.png", "emojis/375.png", "emojis/376.png", "emojis/377.png", "emojis/378.png", "emojis/379.png", "emojis/380.png", "emojis/381.png", "emojis/382.png", "emojis/383.png", "emojis/384.png", "emojis/385.png", "emojis/386.png", "emojis/387.png", "emojis/388.png", "emojis/389.png", "emojis/390.png", "emojis/391.png", "emojis/392.png", "emojis/393.png", "emojis/394.png", "emojis/395.png", "emojis/396.png", "emojis/397.png", "emojis/398.png", "emojis/399.png", "emojis/400.png", "emojis/401.png", "emojis/402.png", "emojis/403.png", "emojis/404.png", "emojis/405.png", "emojis/406.png", "emojis/407.png", "emojis/408.png", "emojis/409.png", "emojis/410.png", "emojis/411.png", "emojis/412.png", "emojis/413.png", "emojis/414.png", "emojis/415.png", "emojis/416.png", "emojis/417.png", "emojis/418.png", "emojis/419.png", "emojis/420.png", "emojis/421.png", "emojis/422.png", "emojis/423.png", "emojis/424.png", "emojis/425.png", "emojis/426.png", "emojis/427.png", "emojis/428.png", "emojis/429.png", "emojis/430.png", "emojis/431.png", "emojis/432.png", "emojis/433.png", "emojis/434.png", "emojis/435.png", "emojis/436.png", "emojis/437.png", "emojis/438.png", "emojis/439.png", "emojis/440.png", "emojis/441.png", "emojis/442.png", "emojis/443.png", "emojis/444.png", "emojis/445.png", "emojis/446.png", "emojis/447.png", "emojis/448.png", "emojis/449.png", "emojis/450.png", "emojis/451.png", "emojis/452.png", "emojis/453.png", "emojis/454.png", "emojis/455.png", "emojis/456.png", "emojis/457.png", "emojis/458.png", "emojis/459.png", "emojis/460.png", "emojis/461.png", "emojis/462.png", "emojis/463.png", "emojis/464.png", "emojis/465.png", "emojis/466.png", "emojis/467.png", "emojis/468.png", "emojis/469.png", "emojis/470.png", "emojis/471.png", "emojis/472.png", "emojis/473.png", "emojis/474.png", "emojis/475.png", "emojis/476.png", "emojis/477.png", "emojis/478.png", "emojis/479.png", "emojis/480.png", "emojis/481.png", "emojis/482.png", "emojis/483.png", "emojis/484.png", "emojis/485.png", "emojis/486.png", "emojis/487.png", "emojis/488.png", "emojis/489.png", "emojis/490.png", "emojis/491.png", "emojis/492.png", "emojis/493.png", "emojis/494.png", "emojis/495.png", "emojis/496.png", "emojis/497.png", "emojis/498.png", "emojis/499.png", "emojis/500.png", "emojis/501.png", "emojis/502.png", "emojis/503.png", "emojis/504.png", "emojis/505.png", "emojis/506.png", "emojis/507.png", "emojis/508.png", "emojis/509.png", "emojis/510.png", "emojis/511.png", "emojis/512.png", "emojis/513.png", "emojis/514.png", "emojis/515.png", "emojis/516.png", "emojis/517.png", "emojis/518.png", "emojis/519.png", "emojis/520.png", "emojis/521.png", "emojis/522.png", "emojis/523.png", "emojis/524.png", "emojis/525.png", "emojis/526.png", "emojis/527.png", "emojis/528.png", "emojis/529.png", "emojis/530.png", "emojis/531.png", "emojis/532.png", "emojis/533.png", "emojis/534.png", "emojis/535.png", "emojis/536.png", "emojis/537.png", "emojis/538.png", "emojis/539.png", "emojis/540.png", "emojis/541.png", "emojis/542.png", "emojis/543.png", "emojis/544.png", "emojis/545.png", "emojis/546.png", "emojis/547.png", "emojis/548.png", "emojis/549.png", "emojis/550.png", "emojis/551.png", "emojis/552.png", "emojis/553.png", "emojis/554.png", "emojis/555.png", "emojis/556.png", "emojis/557.png", "emojis/558.png", "emojis/559.png", "emojis/560.png", "emojis/561.png", "emojis/562.png", "emojis/563.png", "emojis/564.png", "emojis/565.png", "emojis/566.png", "emojis/567.png", "emojis/568.png", "emojis/569.png", "emojis/570.png", "emojis/571.png", "emojis/572.png", "emojis/573.png", "emojis/574.png", "emojis/575.png", "emojis/576.png", "emojis/577.png", "emojis/578.png", "emojis/579.png", "emojis/580.png", "emojis/581.png", "emojis/582.png", "emojis/583.png", "emojis/584.png", "emojis/585.png", "emojis/586.png", "emojis/587.png", "emojis/588.png", "emojis/589.png", "emojis/590.png", "emojis/591.png", "emojis/592.png", "emojis/593.png", "emojis/594.png", "emojis/595.png", "emojis/596.png", "emojis/597.png", "emojis/598.png", "emojis/599.png", "emojis/600.png", "emojis/601.png", "emojis/602.png", "emojis/603.png", "emojis/604.png", "emojis/605.png", "emojis/606.png", "emojis/607.png", "emojis/608.png", "emojis/609.png", "emojis/610.png", "emojis/611.png", "emojis/612.png", "emojis/613.png", "emojis/614.png", "emojis/615.png", "emojis/616.png", "emojis/617.png", "emojis/618.png", "emojis/619.png", "emojis/620.png", "emojis/621.png", "emojis/622.png", "emojis/623.png", "emojis/624.png", "emojis/625.png", "emojis/626.png", "emojis/627.png", "emojis/628.png", "emojis/629.png", "emojis/630.png", "emojis/631.png", "emojis/632.png", "emojis/633.png", "emojis/634.png", "emojis/635.png", "emojis/636.png", "emojis/637.png", "emojis/638.png", "emojis/639.png", "emojis/640.png", "emojis/641.png", "emojis/642.png", "emojis/643.png", "emojis/644.png", "emojis/645.png", "emojis/646.png", "emojis/647.png", "emojis/648.png", "emojis/649.png", "emojis/650.png", "emojis/651.png", "emojis/652.png", "emojis/653.png", "emojis/654.png", "emojis/655.png", "emojis/656.png", "emojis/657.png", "emojis/658.png", "emojis/659.png", "emojis/660.png", "emojis/661.png", "emojis/662.png", "emojis/663.png", "emojis/664.png", "emojis/665.png", "emojis/666.png", "emojis/667.png", "emojis/668.png", "emojis/669.png", "emojis/670.png", "emojis/671.png", "emojis/672.png", "emojis/673.png", "emojis/674.png", "emojis/675.png", "emojis/676.png", "emojis/677.png", "emojis/678.png", "emojis/679.png", "emojis/680.png", "emojis/681.png", "emojis/682.png", "emojis/683.png", "emojis/684.png", "emojis/685.png", "emojis/686.png", "emojis/687.png", "emojis/688.png", "emojis/689.png", "emojis/690.png", "emojis/691.png", "emojis/692.png", "emojis/693.png", "emojis/694.png", "emojis/695.png", "emojis/696.png", "emojis/697.png", "emojis/698.png", "emojis/699.png", "emojis/700.png", "emojis/701.png", "emojis/702.png", "emojis/703.png", "emojis/704.png", "emojis/705.png", "emojis/706.png", "emojis/707.png", "emojis/708.png", "emojis/709.png", "emojis/710.png", "emojis/711.png", "emojis/712.png", "emojis/713.png", "emojis/714.png", "emojis/715.png", "emojis/716.png", "emojis/717.png", "emojis/718.png", "emojis/719.png", "emojis/720.png", "emojis/721.png", "emojis/722.png", "emojis/723.png", "emojis/724.png", "emojis/725.png", "emojis/726.png", "emojis/727.png", "emojis/728.png", "emojis/729.png", "emojis/730.png", "emojis/731.png", "emojis/732.png", "emojis/733.png", "emojis/734.png", "emojis/735.png", "emojis/736.png", "emojis/737.png", "emojis/738.png", "emojis/739.png", "emojis/740.png", "emojis/741.png", "emojis/742.png", "emojis/743.png", "emojis/744.png", "emojis/745.png", "emojis/746.png", "emojis/747.png", "emojis/748.png", "emojis/749.png", "emojis/750.png", "emojis/751.png", "emojis/752.png", "emojis/753.png", "emojis/754.png", "emojis/755.png", "emojis/756.png", "emojis/757.png", "emojis/758.png", "emojis/759.png", "emojis/760.png", "emojis/761.png", "emojis/762.png", "emojis/763.png", "emojis/764.png", "emojis/765.png", "emojis/766.png", "emojis/767.png", "emojis/768.png", "emojis/769.png", "emojis/770.png", "emojis/771.png", "emojis/772.png", "emojis/773.png", "emojis/774.png", "emojis/775.png", "emojis/776.png", "emojis/777.png", "emojis/778.png", "emojis/779.png", "emojis/780.png", "emojis/781.png", "emojis/782.png", "emojis/783.png", "emojis/784.png", "emojis/785.png", "emojis/786.png", "emojis/787.png", "emojis/788.png", "emojis/789.png", "emojis/790.png", "emojis/791.png", "emojis/792.png", "emojis/793.png", "emojis/794.png", "emojis/795.png", "emojis/796.png", "emojis/797.png", "emojis/798.png", "emojis/799.png", "emojis/800.png", "emojis/801.png", "emojis/802.png", "emojis/803.png", "emojis/804.png", "emojis/805.png", "emojis/806.png", "emojis/807.png", "emojis/808.png", "emojis/809.png", "emojis/810.png", "emojis/811.png", "emojis/812.png", "emojis/813.png", "emojis/814.png", "emojis/815.png", "emojis/816.png", "emojis/817.png", "emojis/818.png", "emojis/819.png", "emojis/820.png", "emojis/821.png", "emojis/822.png", "emojis/823.png", "emojis/824.png", "emojis/825.png", "emojis/826.png", "emojis/827.png", "emojis/828.png", "emojis/829.png"];

someImages = ["emojis/1.png", "emojis/2.png", "emojis/3.png", "emojis/4.png", "emojis/5.png", "emojis/6.png", "emojis/7.png", "emojis/8.png", "emojis/9.png", "emojis/10.png", "emojis/11.png", "emojis/12.png", "emojis/13.png", "emojis/14.png", "emojis/15.png"];



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
var emojiCount = 1;

// storage for recent emojis
var recents = []

// storage for all current clouds
clouds = []

// background constants
var BG_LOCATIONS = [[152, 155],[450, 155],[752, 155]]
var BACKGROUNDS = [
  {id: 'bgStatic', name: "Static"},
  {id: 'bgSpace', name: "Space"},
  {id: 'bgJungle', name: "Jungle"},
  {id: 'bgWave', name: "Beach"},
  {id: 'bgPinkBlue', name: "Cat Hate Monday"}
  ]

// set everything up
setUpBoard()

function setUpBoard(){
  boardLayer.activate()
  makeLines()
  emojiLayer.activate()
  loadMoreEmojis()
  // loadAllEmojis()
  populateBackgroundOptions()
  setupRandomBackground()
}


function setupRandomBackground(){
  var index = Math.floor(Math.random() * BACKGROUNDS.length)
    thisBackground = BACKGROUNDS[index].id
 for(var i = 1; i < 4; i++){

    makeBackground(i, thisBackground)
    $("#bg" + i).val(thisBackground)
  }
}


function loadMoreEmojis(){
  for(var i = 0; i < 50; i++){
  if(emojiCount < 846){
    var thisEmojiLocation = "emojis/" + String(emojiCount) + ".png"
    var thisImg = $('<img>').attr('src', thisEmojiLocation)
    thisImg.attr('id', String(emojiCount))
     $("#emojiChooser").append(thisImg)
     emojiCount += 1
    }
  }
  $("#loadButtons").append($("#moreEmojis"))
  $("#loadButtons").append($("#allEmojis"))
}

function showNumberOfLoadedEmojis(){
  $("#numberLoaded").html(String($('#emojiChooser').children('img').length) + "/845 emojis loaded")
}

function loadRemainingEmojis(){
  for(var i = emojiCount; i < 846; i++){
    var thisEmojiLocation = "emojis/" + String(emojiCount) + ".png"
    var thisImg = $('<img>').attr('src', thisEmojiLocation)
    thisImg.attr('id', String(emojiCount))
     $("#emojiChooser").append(thisImg)
     emojiCount += 1
  }
  $("#moreEmojis").hide()
  $("#allEmojis").hide()
}

$("#moreEmojis").on("click", function(){
  loadMoreEmojis()
})

$("#allEmojis").on("click", function(){
  loadRemainingEmojis()
})

function loadAllEmojis(){

$.imgpreload(allImages,
{
    each: function()
    {
      var thisImage = $(this)
      var number = thisImage.attr('src').split('.')[0].split("/")[1]
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



function populateBackgroundOptions(){
  for(var i = 1; i < 4; i++){
    var thisMenu = $("#bg" + String(i))
    for(var bg = 0; bg < BACKGROUNDS.length; bg++){
      var thisBackground = BACKGROUNDS[bg]
      thisMenu.append("<option class='bgoption' value='" + thisBackground.id + "'>" + thisBackground.name + "</option>")
    }
  }
}

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





$("#emojiChooser").on("click", 'img', function(){
  var thisID = $(this).attr('id')
  var raster = new Raster(thisID)
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
  imageCopy.attr('src', 'emojis/' + id + '.png')
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
