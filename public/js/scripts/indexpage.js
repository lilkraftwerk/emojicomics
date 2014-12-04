$(document).ready(function(){
    loadNewCatchphrase()
});

var catchphrases = [
    'to err is human; to emoji, divine',
    'an unemoji\'d life is not worth living',
    'fiat emojis',
    'give me emojis or give me death',
    'a man without emojis is a wild beast loosed upon this world',
    'know thy emoji',
    ''
]

function loadNewCatchphrase(){
    var index = Math.floor(Math.random() * catchphrases.length)
    $(".mainquote").text(catchphrases[index])
}