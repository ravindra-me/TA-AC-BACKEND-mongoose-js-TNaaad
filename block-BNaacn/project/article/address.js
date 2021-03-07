var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var address = new Schema(
  {
    village: { String, require: true },
    city: { String, require: true },
    state: { String, require: true },
    pin: Number.EPSILON,
    user: Schema.Types.ObjectId,
  },
  { timestamps: true }
);

var addressModel = mongoose.model('Address', address);
module.exports = addressModel;
