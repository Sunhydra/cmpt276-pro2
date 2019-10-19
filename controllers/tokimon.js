var Tokimon = require('../models/Tokimon');
var nodemailer = require('nodemailer');
var async = require('async');
var request = require('request');

exports.tokimonCount = function(req,res,next) {
  Tokimon.count({}, function(err, result){
    res.send({count:result});
  });
};


exports.tokimonAll = function(req,res,next) {
  console.log('tokimonAll');
  Tokimon.find({isDeleted: { $ne: true }}, function(err, tokimons) {
    if (err) return next(err);
    res.send(tokimons);
  });
};


exports.tokimonOne =function(req,res,next) {
  Tokimon.findOne({ Id: req.params.id }, function(err, tokimon) {
    if (err) return next(err);
    res.send(tokimon);

  });

};
exports.tokimonDeleteOne =function(req,res,next) {
  console.log(req.body.Id);
  Tokimon.remove({ Id: req.body.Id }, function(err) {
    if (err) return next(err);
  });

};
exports.tokimonNewOne = function(req,res,next){
  var name = req.body.name;
  var trainer = req.body.trainer;
  var height = req.body.height;
  var weight= req.body.weight;
  var fly= req.body.fly;
  var fight= req.body.fight;
  var fire= req.body.fire;
  var water= req.body.water;
  var ice= req.body.ice;
  var total = req.body.total;
  var electric = req.body.electric;
  async.waterfall([
    function(callback) {
      Tokimon.findOne({  })
  .sort('-Id')  // give me the max
  .exec(function(err, result){
      if(result){
        callback(err, Number(result.Id)+1);
      }
      else{
        callback(1);
      }
      });
    },
    function(id){
      var tokimon = new Tokimon({
        Id: id,
        name: name,
        trainer: trainer,
        weight: weight,
        height: height,
        fly: fly,
        fight: fight,
        fire: fire,
        water: water,
        electric: electric,
        ice: ice,
        total: total
      });
      tokimon.save(function(err) {
        console.log(err);
        if (err) return next(err);
        console.log('success');
        res.send(tokimon);
      });
    }
  ]);
};

exports.tokimonUpdateOne = function(req,res,next){
  var id= req.body.Id;
  var name = req.body.name;
  var trainer = req.body.trainer;
  var height = req.body.height;
  var weight= req.body.weight;
  var fly= req.body.fly;
  var fight= req.body.fight;
  var fire= req.body.fire;
  var water= req.body.water;
  var ice= req.body.ice;
  var total = req.body.total;
  var electric = req.body.electric;
  Tokimon.findOne({
      Id: id
  }).exec(function(err, tokimon) {
      if (!tokimon) {
          return res
              .status(400)
              .send({ msg: "Tokimon doesn't exist" });
      }

      tokimon.name = name;
      tokimon.trainer = trainer;
      tokimon.weight = weight;
      tokimon.height = height;
      tokimon.fly = fly;
      tokimon.fight = fight;
      tokimon.fire = fire;
      tokimon.water = water;
      tokimon.electric = electric;
      tokimon.ice = ice;
      tokimon.total = total;
      tokimon.save(function(err){
          return res.send(tokimon);
      });
  });
};


function isJson(str) {
    try {
        JSON.parse(str);
    } catch (e) {
        return false;
    }
    return true;
}
