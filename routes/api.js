var Device = require('../models/device');
var Device2 = require('../models/device2');


exports.local_system_health = function (req, res) {
 
    var startTime = req.params.startTime;
    var endTime = req.params.endTime;
 
    var endTime = new Date(endTime); // Your timezone!
    var endEpoch = endTime.getTime()/1000.0;
 
    var startTime = new Date(startTime); // Your timezone!
    var startEpoch = startTime.getTime()/1000.0;

    Device2.find({ i_utctime:{ $lt: Number(endEpoch)},i_utctime:{$gt:Number(startEpoch)}},function(err,device){
        if(err) throw err;
        console.log(device)
        if(device.length>0)
        {
            res.json({
            device: device
            });
        }
        else
        {
            res.json({message: "No devices found"});
        }
      });


}



exports.list_devices = function (req, res) {
    var type = req.params.type;

    if(type==1)
    Device.distinct('i_name',function(err,device){
        if(err) throw err;

        if(device.length>0)
        {
            res.json({
            device: device
            });
        }
        else
        {
            res.json({message: "No devices found"});
        }
      });

    else if(type ==2)
    Device2.distinct('i_name',function(err,device){
        if(err) throw err;

        if(device.length>0)
        {
            res.json({
            device: device
            });
        }
        else
        {
            res.json({message: "No devices found"});
        }
      });


}



exports.type_1_data = function (req, res) {

    var id = req.params.id;
    var startTime = req.params.startTime;
    var endTime = req.params.endTime;
 
    var endTime = new Date(endTime); // Your timezone!
    var endEpoch = endTime.getTime()/1000.0;
 
    var startTime = new Date(startTime); // Your timezone!
    var startEpoch = startTime.getTime()/1000.0;

    console.log(id,startTime,endTime, startEpoch, endEpoch)
    Device.find({ i_name:id, i_utctime:{ $lt: Number(endEpoch)},i_utctime:{$gt:Number(startEpoch)}},function(err,device){
        if(err) throw err;
        console.log(device)
        if(device.length>0)
        {
            res.json({
            device: device
            });
        }
        else
        {
            res.json({message: "No devices found"});
        }
      });


}

exports.geo_overspeeding = function (req, res) {
   
    var startTime = req.params.startTime;
    var endTime = req.params.endTime;
 
    var endTime = new Date(endTime); // Your timezone!
    var endEpoch = endTime.getTime()/1000.0;
 
    var startTime = new Date(startTime); // Your timezone!
    var startEpoch = startTime.getTime()/1000.0;

    //console.log(id,startTime,endTime, startEpoch, endEpoch)
    Device.find({ i_utctime:{ $lt: Number(endEpoch)},i_utctime:{$gt:Number(startEpoch)}, i_speed: {$gt: Number(60)} }).distinct('i_name',function(err,device){
        if(err) throw err;
        console.log(device)
        var deviceArray = [];
        if(device.length>0)
        {
            for(var i=0;i<device.length;i++)
            {
                Device.findOne({i_name: device},function(err,device)
                {
                    if(err) throw err;
                    deviceArray.push(device);
                    console.log(deviceArray)

                    return 
                });
            }
            console.log("sad",deviceArray)
            console.log("end")
            res.json({device: deviceArray});
        }
        else
        {
            res.json({message: "No devices found"});
        }
      });


}



exports.geo_dwell = function (req, res) {
  
    var latitude = req.params.latitude;
    var longitude = req.params.longitude;
    var startTime = req.params.startTime;
    var endTime = req.params.endTime;
 
    var endTime = new Date(endTime); // Your timezone!
    var endEpoch = endTime.getTime()/1000.0;
 
    var startTime = new Date(startTime); // Your timezone!
    var startEpoch = startTime.getTime()/1000.0;
    
    Device.find({ i_location: { $near : { $geometry: { type: "Point", coordinates: [ Number(longitude), Number(latitude) ] }, $minDistance: 0, $maxDistance: 10000 } }, i_utctime:{ $lt: Number(endEpoch)},i_utctime:{$gt:Number(startEpoch)}}).distinct('i_name',function(err,device){
        if(err) throw err;
        console.log(device)
        if(device.length>0)
        {
            res.json({
            device: device
            });
        }
        else
        {
            res.json({message: "No devices found"});
        }
      });


}



exports.stationary_filter = function (req, res) {
    
    
    var startTime = req.params.startTime;
    var endTime = req.params.endTime;
 
    var endTime = new Date(endTime); // Your timezone!
    var endEpoch = endTime.getTime()/1000.0;
 
    var startTime = new Date(startTime); // Your timezone!
    var startEpoch = startTime.getTime()/1000.0;

    //console.log(id,startTime,endTime, startEpoch, endEpoch)
    Device.find({ i_utctime:{ $lt: Number(endEpoch)},i_utctime:{$gt:Number(startEpoch)}, i_speed: 0 }).distinct('i_name',function(err,device){
        if(err) throw err;
        console.log(device)
        var deviceArray = [];
        if(device.length>0)
        {
            for(var i=0;i<device.length;i++)
            {
                Device.findOne({i_name: device},function(err,device)
                {
                    if(err) throw err;
                    deviceArray.push(device);
                    console.log(deviceArray)

                });
            }
            console.log("sad",deviceArray)
            console.log("end")
            res.json({device: deviceArray});
        }
        else
        {
            res.json({message: "No devices found"});
        }
      });


}
