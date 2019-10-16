var mongoose = require('mongoose');

var schemaOptions = {
  timestamps: true,
  toJSON: {
    virtuals: true
  }
};

//Tokimon schema
var tokimonSchema = new mongoose.Schema( {
  Id: { type: Number, unique: true, index: true },
  name: String,
  trainer: String,
  weight: Number,
  height: Number,
  fly: Number,
  fight: Number,
  fire: Number,
  water: Number,
  electric: Number,
  ice: Number,
  total: Number
}, schemaOptions);

var Tokimon = mongoose.model('Tokimon', tokimonSchema);

module.exports = Tokimon;
