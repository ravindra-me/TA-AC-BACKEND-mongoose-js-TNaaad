var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var article = new Schema({
  title: String,
  description: String,
  tags: [String],
  createdAt: { type: Date, default: new Date() },
  likes: { type: Number, default: 0 },
});

var articleModel = mongoose.model('Article', article);
module.exports = articleModel;
