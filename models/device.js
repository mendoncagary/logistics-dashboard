var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var deviceSchema = new Schema({
  i_name:{
      type: String
  },
  i_type:{
      type: String,
  },
  i_latitude:{
      type:Number
  },
  i_longitude:{
    type: Number
  },
  i_utctime:{
    type: Number
  },
  i_status:{
    type: String
  },
  i_speed:{
    type: Number
  },
  i_location: {
    type: JSON
  }
});

deviceSchema.index({i_location:"2dsphere"});
var Device  = mongoose.model('device',deviceSchema);

module.exports=Device;