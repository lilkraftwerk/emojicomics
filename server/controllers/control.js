var Comic = require('../models/comic')
var shortId = require('shortid');

module.exports.create = function (req, res){
  // var body = req.body
  // body.shortID = shortId.generate()
  // body.img = "hi"
  // var comic = new Comic(body)

  //   if(err){
  //     console.log(err)
  //   } else {
  //     // res.send('<p>some html</p>');
  //   }
  // })
  // comic.save()
  // console.log("after save")
  res.send('wahoo');

}

module.exports.createTwo = function(request){
  body = request.body
  body.shortID = shortId.generate()
  var comic = new Comic(body)
  comic.save(function(err, documentz){
    console.log(err)
    console.log('hi')
    console.log(documentz)
  })
  return body
}

module.exports.list = function (req, res) {
  Comic.find({}, function(err, results){
    res.json(results);
  })
}

module.exports.getOne = function(searchedShortID){

  // console.log(searchedShortID)
  // var thisComic = Comic.find()
  // console.log(thisComic)
  // ({shortID: searchedShortID})
  // return thisComic
}

module.exports.findLast = function(req, res){
    // Comic.find().sort({ id: 1 }).limit(1, function(err, results){
      // console.log(results)
      // res.json(results);
    // })
Comic.find().sort({ id: 1 }).limit(1, function(error, data){

})
    // db.comics.find().sort({name:1}, function(error, tuples) { console.log(tuples) });



  //   Comic.find.({}, function(err, results){
  //   res.json(results);
  // })
}
