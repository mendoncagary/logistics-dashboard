var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var device2Schema = new Schema({
  i_name:{
      type: String
  },
  i_type:{
      type: String,
  },
  i_ramusage:{
    type: Number
  },
  i_cpuusage:{
      type: Number
  },
  i_utctime:{
    type: Number
  }
});

var Device2  = mongoose.model('device2',device2Schema);

module.exports=Device2;