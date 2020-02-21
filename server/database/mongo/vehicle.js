var mongoose = require ('mongoose');
const Schema = mongoose.Schema;

var VehicleSchema = new Schema ({
  year: Number,
  make: String,
  model: String,
  category: String,
  convenienceid: Number, 
  entid: Number, 
  offroadid: Number, 
  seattrimid: Number, 
  specsdimebid: Number,
});

module.exports = mongoose.model('Vehicle', VehicleSchema);