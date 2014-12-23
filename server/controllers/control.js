var Comic = require('../models/comic')
var shortId = require('shortid');

module.exports.create = function (req, res){
  res.send('wahoo');

}

module.exports.createTwo = function(request){
  body = request.body
  body.shortID = shortId.generate()
  var comic = new Comic(body)
  comic.save(function(err, documentz){
  })
  return body
}

module.exports.list = function (req, res) {
  Comic.find({}, function(err, results){
    res.json(results);
  })
}

module.exports.findLast = function(req, res){
Comic.find().sort({ id: 1 }).limit(1, function(error, data){

})
}
