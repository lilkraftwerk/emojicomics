var express = require ('express.io');
var app = express();
app.http().io();
var mongoose = require('mongoose');
var ShortId = require('mongoose-shortid');
var bodyParser = require('body-parser')
var comicController = require('./server/controllers/control')
var Comic = require('./server/models/comic')
var favicon = require('serve-favicon');
var dateFormat = require('dateformat');
var Twitter = require('twitter');





var client = new Twitter({
consumer_key: process.env.TWITTER_KEY,
  consumer_secret: process.env.TWITTER_SECRET,
  access_token_key: process.env.TWITTER_TOKEN,
  access_token_secret: process.env.TOKEN_SECRET
    });

console.log(client)
var uristring = process.env.MONGO_URI || process.env.MONGOLAB_URI || 'mongodb://localhost/test'
var theport = process.env.PORT || 3004;

mongoose.connect(uristring);

app.use(express.static(__dirname + '/public'));
app.use(favicon(__dirname + '/public/favicon.ico'));

app.use(bodyParser.urlencoded());
app.use(bodyParser.json({
  limit: 1000000000000
}));
app.set('view engine', 'ejs');

app.io.route('ready', function(req) {
    req.io.broadcast('new visitor')
})

app.get('/', function(req, res){
  res.render('index')
});

app.get('/code', function(req, res){
  res.render('codeindex')
})


app.post('/comics', function(req, res){
  var body = comicController.createTwo(req)
  res.send(body)
});


app.get('/comics/create', function(req, res){
  res.render('create')
});

app.get('/visuals', function(req, res){
  res.render('visuals')
});


app.get('/comics', function(req, res){
  res.render('comicindex')
})


app.get('/comics/random', function(req, res){
      Comic.findOneRandom(function(err, docs) {
        if (!err) {
          var thisComic = docs;
          var thisDate = dateFormat(thisComic.date, "longDate");
          res.render('random', {author: thisComic.author, img: thisComic.img, shortid: thisComic.shortID, date: thisDate, shortURL: 'http://emoji.vision/comics/' + thisComic.shortID})
        }
      });
});

app.get('/comics/randomcomic', function(req, res){
      Comic.findOneRandom(function(err, docs) {
        if (!err) {
          var thisComic = docs
          var thisDate = dateFormat(thisComic.date, "longDate");
          res.send({author: thisComic.author, img: thisComic.img, shortid: thisComic.shortID, date: thisDate, shortURL: 'http://emoji.vision/comics/' + thisComic.shortID})
        }
      });
});

app.get('/comics/:id', function(req, res){
    var searchedID = req.params.id
    Comic.find({shortID: searchedID}, function (err, docs) {
      if (docs.length === 0){
        res.redirect('/comics')
      } else if (docs.length === 1) {
        var thisComic = docs[0]
        var thisDate = dateFormat(thisComic.date, "longDate");
        res.render('comicshow', {author: thisComic.author, img: thisComic.img, shortid: thisComic.shortID, date: thisDate})
      }
  });
});

app.get('*', function(req, res){
  res.redirect('/');
});

app.listen(theport, function(){
  console.log("listening on " + theport)
})

da_emojis = ["😄", "😃", "😀", "😊", "☺", "😉", "😍", "😘", "😚", "😗", "😙", "😜", "😝", "😛", "😳", "😁", "😔", "😌", "😒", "😞", "😣", "😢", "😂", "😭", "😪", "😥", "😰", "😅", "😓", "😩", "😫", "😨", "😱", "😠", "😡", "😤", "😖", "😆", "😋", "😷", "😎", "😴", "😵", "😲", "😟", "😦", "😧", "😈", "👿", "😮", "😬", "😐", "😕", "😯", "😶", "😇", "😏", "😑", "👲", "👳", "👮", "👷", "💂", "👶", "👦", "👧", "👨", "👩", "👴", "👵", "👱", "👼", "👸", "😺", "😸", "😻", "😽", "😼", "🙀", "😿", "😹", "😾", "👹", "👺", "🙈", "🙉", "🙊", "💀", "👽", "💩", "🔥", "✨", "🌟", "💫", "💥", "💢", "💦", "💧", "💤", "💨", "👂", "👀", "👃", "👅", "👄", "👍", "👎", "👌", "👊", "✊", "✌", "👋", "✋", "👐", "👆", "👇", "👉", "👈", "🙌", "🙏", "☝", "👏", "💪", "🚶", "🏃", "💃", "👫", "👪", "👬", "👭", "💏", "💑", "👯", "🙆", "🙅", "💁", "🙋", "💆", "💇", "💅", "👰", "🙎", "🙍", "🙇", "🎩", "👑", "👒", "👟", "👞", "👡", "👠", "👢", "👕", "👔", "👚", "👗", "🎽", "👖", "👘", "👙", "💼", "👜", "👝", "👛", "👓", "🎀", "🌂", "💄", "💛", "💙", "💜", "💚", "❤", "💔", "💗", "💓", "💕", "💖", "💞", "💘", "💌", "💋", "💍", "💎", "👤", "👥", "💬", "👣", "💭", "🐶", "🐺", "🐱", "🐭", "🐹", "🐰", "🐸", "🐯", "🐨", "🐻", "🐷", "🐽", "🐮", "🐗", "🐵", "🐒", "🐴", "🐑", "🐘", "🐼", "🐧", "🐦", "🐤", "🐥", "🐣", "🐔", "🐍", "🐢", "🐛", "🐝", "🐜", "🐞", "🐌", "🐙", "🐚", "🐠", "🐟", "🐬", "🐳", "🐋", "🐄", "🐏", "🐀", "🐃", "🐅", "🐇", "🐉", "🐎", "🐐", "🐓", "🐕", "🐖", "🐁", "🐂", "🐲", "🐡", "🐊", "🐫", "🐪", "🐆", "🐈", "🐩", "🐾", "💐", "🌸", "🌷", "🍀", "🌹", "🌻", "🌺", "🍁", "🍃", "🍂", "🌿", "🌾", "🍄", "🌵", "🌴", "🌲", "🌳", "🌰", "🌱", "🌼", "🌐", "🌞", "🌝", "🌚", "🌑", "🌒", "🌓", "🌔", "🌕", "🌖", "🌗", "🌘", "🌜", "🌛", "🌙", "🌍", "🌎", "🌏", "🌋", "🌌", "🌠", "⭐", "☀", "⛅", "☁", "⚡", "☔", "❄", "⛄", "🌀", "🌁", "🌈", "🌊", "🎍", "💝", "🎎", "🎒", "🎓", "🎏", "🎆", "🎇", "🎐", "🎑", "🎃", "👻", "🎅", "🎄", "🎁", "🎋", "🎉", "🎊", "🎈", "🎌", "🔮", "🎥", "📷", "📹", "📼", "💿", "📀", "💽", "💾", "💻", "📱", "☎", "📞", "📟", "📠", "📡", "📺", "📻", "🔊", "🔉", "🔈", "🔇", "🔔", "🔕", "📢", "📣", "⏳", "⌛", "⏰", "⌚", "🔓", "🔒", "🔏", "🔐", "🔑", "🔎", "💡", "🔦", "🔆", "🔅", "🔌", "🔋", "🔍", "🛁", "🛀", "🚿", "🚽", "🔧", "🔩", "🔨", "🚪", "🚬", "💣", "🔫", "🔪", "💊", "💉"]

var joined = da_emojis.join(',')


client.stream('statuses/filter', {track: joined}, function(stream) {
    stream.on('data', function(tweet) {
          app.io.broadcast('tweet', {tweet: tweet});
    });
});

