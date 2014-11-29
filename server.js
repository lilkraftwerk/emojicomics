var express = require ('express');
var app = express();
var mongoose = require('mongoose');
var ShortId = require('mongoose-shortid');
var bodyParser = require('body-parser')
var comicController = require('./server/controllers/control')
var Comic = require('./server/models/comic')


var uristring = process.env.MONGOLAB_URI || process.env.MONGOHQ_URL || 'mongodb://localhost/test'
var theport = process.env.PORT || 3000;

console.log(uristring)
console.log(!process.env.ON_HEROKU === undefined)

mongoose.connect(uristring);

app.use(express.static(__dirname + '/public'));

app.use(bodyParser.urlencoded());
app.use(bodyParser.json({
  limit: 1000000000000
}));
app.set('view engine', 'ejs');



app.get('/', function(req, res){
  res.render('index')
});

app.get('/comics/create', function(req, res){
  res.render('create')
});

app.get('/apitest', function(req, res){
  Comic.find({shortID: 'X10AOBsg'}, function (err, docs) {
        res.json(docs);
  });
});

app.post('/comics', function(req, res){
  var body = comicController.createTwo(req)
  res.send(body)
});

app.get('/comics/random', function(req, res){
      Comic.findOneRandom(function(err, docs) {
        if (!err) {
          var thisComic = docs
          res.render('random', {author: thisComic.author, img: thisComic.img, shortid: thisComic.shortID})
        }
      });
});

app.get('/comics/randomcomic', function(req, res){
      Comic.findOneRandom(function(err, docs) {
        if (!err) {
          var thisComic = docs
          res.send({author: thisComic.author, img: thisComic.img, shortid: thisComic.shortID})
        }
      });
});

app.get('/comics/:id', function(req, res){
    var searchedID = req.params.id
    Comic.find({shortID: searchedID}, function (err, docs) {
      var thisComic = docs[0]
      res.render('comicshow', {author: thisComic.author, img: thisComic.img, shortid: thisComic.shortID})
  });
});

app.get('/weirdroute', function(req, res){
    var searchedID = req.params.id
    Comic.find({shortID: searchedID}, function (err, docs) {
        res.json(docs);
  });
});


app.listen(theport, function(){
  console.log("listening on " + theport)
})