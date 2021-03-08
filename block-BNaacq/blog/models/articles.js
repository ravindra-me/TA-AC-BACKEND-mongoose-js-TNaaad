var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var article = new Schema(
  {
    title: { String, minlength: 5, maxlength: 30, required: true },
    description: String,
    tags: String,
    likes: [String],
    author: Schema.Types.ObjectId,
    comments: [String],
  },
  { timestamps: true }
);

var Article = mongoose.model('Article', article);

module.exports = Article;
