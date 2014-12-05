var express = require ('express');
var app = express();
var mongoose = require('mongoose');
var ShortId = require('mongoose-shortid');
var bodyParser = require('body-parser')
var comicController = require('./server/controllers/control')
var Comic = require('./server/models/comic')
var favicon = require('serve-favicon');
var dateFormat = require('dateformat');


var uristring = process.env.MONGO_URI || process.env.MONGOLAB_URI || 'mongodb://localhost/test'
var theport = process.env.PORT || 8080;

mongoose.connect(uristring);

app.use(express.static(__dirname + '/public'));
app.use(favicon(__dirname + '/public/favicon.ico'));


app.use(bodyParser.urlencoded());
app.use(bodyParser.json({
  limit: 1000000000000
}));
app.set('view engine', 'ejs');



app.get('/', function(req, res){
  res.render('index')
});

app.get('/code', function(req, res){
  res.render('codeindex')
})


app.get('/comics', function(req, res){
  res.render('comicindex')
})

app.post('/comics', function(req, res){
  var body = comicController.createTwo(req)
  res.send(body)
});


app.get('/comics/create', function(req, res){
  res.render('create')
});


app.get('/comics/random', function(req, res){
      Comic.findOneRandom(function(err, docs) {
        if (!err) {
          var thisComic = docs;
          var thisDate = dateFormat(thisComic.date, "longDate");
          res.render('random', {author: thisComic.author, img: thisComic.img, shortid: thisComic.shortID, date: thisDate})
        }
      });
});

app.get('/comics/randomcomic', function(req, res){
      Comic.findOneRandom(function(err, docs) {
        if (!err) {
          var thisComic = docs
          var thisDate = dateFormat(thisComic.date, "longDate");
          res.send({author: thisComic.author, img: thisComic.img, shortid: thisComic.shortID, date: thisDate})
        }
      });
});

app.get('/comics/:id', function(req, res){
    var searchedID = req.params.id
    Comic.find({shortID: searchedID}, function (err, docs) {
      var thisComic = docs[0]
      var thisDate = dateFormat(thisComic.date, "longDate");
      res.render('comicshow', {author: thisComic.author, img: thisComic.img, shortid: thisComic.shortID, date: thisDate})
  });
});

app.get('*', function(req, res){
  res.render('index');
});

app.listen(theport, function(){
  console.log("listening on " + theport)
})