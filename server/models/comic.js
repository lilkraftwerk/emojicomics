var mongoose = require('mongoose');

module.exports = mongoose.model('Comic', {
  author: String,
  date: { type: Date, default: Date.now },
  img: { data: Buffer, contentType: String }
});