var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var comments = new Schema(
  {
    content: { type: String, minlength: 5, maxlength: 30 },
    author: Schema.Types.ObjectId,
    article: String,
  },
  { timestamps: true }
);

var Comments = mongoose.model('Comments', comments);
module.exports = Comments;
