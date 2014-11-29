var mongoose = require('mongoose');
var ShortId = require('mongoose-shortid');
var random = require('mongoose-simple-random');

var comicSchema = new mongoose.Schema({
  author: String,
  date: { type: Date, default: Date.now },
  img: String,
  shortID: String
})

comicSchema.plugin(random)

var Comic = mongoose.model('Comic', comicSchema);


module.exports = Comic