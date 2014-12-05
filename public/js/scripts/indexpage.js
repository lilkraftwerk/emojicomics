var catchphrases = [
    'Transforming Emoji Analytics For Web 4.0',
    'Voted Emoji Thought Leaders 2013-2014',
    'Emoji Solutions For An ASCII World',
    'b2b Emoji Consultants Champions 2015',
    'Enabling Emojitrepreneurs'
]

$(document).ready(function(){
    loadNewCatchphrase()
});



function loadNewCatchphrase(){
    var index = Math.floor(Math.random() * catchphrases.length)
    $(".mainquote").text(catchphrases[index])
}