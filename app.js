var fs = require('fs');
var http = require('http');
var https = require('https');
var privateKey  = fs.readFileSync('certs/server.key', 'utf8');
var certificate = fs.readFileSync('certs/server.pem', 'utf8');

var forceSsl = require('express-force-ssl');
var mongoose = require('mongoose');
var db = require('./config/db');
var api = require('./routes/api');
var Device = require('./models/device');
var Device2 = require('./models/device2');

// var options = { server: { socketOptions: { keepAlive: 300000, connectTimeoutMS: 30000 } , auto_reconnect: true,reconnectTries: Number.MAX_VALUE,reconnectInterval: 1000 },
// replset: { socketOptions: { keepAlive: 300000, connectTimeoutMS : 30000 } } };

mongoose.connect(db.url);
mongoose.connection.on('error', function(error){
	console.error.bind(console, 'MongoDB connection error:');
	mongoose.disconnect();
});

mongoose.connection.on('disconnected', function() {
	console.log('MongoDB disconnected!');
	mongoose.connect(db.url);
});


var credentials = {key: privateKey, cert: certificate};
var express = require('express');
var cors = require('cors')
var app = express();

app.use(cors())


app.use(forceSsl);


app.get('/api/local-system-health/:startTime/:endTime', api.local_system_health);
app.get('/api/list-devices/:type', api.list_devices);
app.get('/api/type-1-data/:id/:startTime/:endTime', api.type_1_data);
app.get('/api/geo-over-speeding/:startTime/:endTime', api.geo_overspeeding);
app.get('/api/geo-dwell/:latitude/:longitude/:startTime/:endTime', api.geo_dwell);
app.get('/api/stationary-filter/:startTime/:endTime', api.stationary_filter);

// your express configuration here

// tls server
const tls = require('tls');
//const fs = require('fs');

const options = {
  key: fs.readFileSync('certs/server.key'),
  cert: fs.readFileSync('certs/server.pem'),

  rejectUnauthorized: true,
};

var socket = {}
const server = tls.createServer(options, (s) => {
  client=s
  //console.log(s)
  socket[client] = s;
  console.log('server connected',
              socket[client].authorized ? 'authorized' : 'unauthorized');
  //socket.write('welcome!\n');
  //socket.setEncoding('utf8');
 // socket.pipe(socket);
 
 socket[client].setEncoding('utf8');
 socket[client].write('welcome')

 for (key in socket){
  socket[key].write('new client connected')
}

 socket[client].on('data',(data)=>
{
  console.log(data)
  socket[client].write("Recieved");
  var data = JSON.parse(data)

  // var d = new Date(0); // The 0 there is the key, which sets the date to the epoch
  // d.setUTCSeconds(data.utctime);
        
console.log(data.utctime)
  if(data.type==1)
      {

      var new_device = new Device({
          i_name: data.name,
          i_type: data.type,
          i_latitude: data.latitude,
          i_longitude: data.longitude,
          i_utctime: Number(data.utctime),
          i_status: data.status,
          i_speed: data.speed,
          i_location:  { "type": "Point", 
          "coordinates": [data.longitude, data.latitude]
        }
        });
        console.log(new_device)
      new_device.save(function(err,rows){
      if(err) throw err;
        });
    }
    else if(data.type==2)
    {
      var new_device2 = new Device2({
        i_name: data.name,
        i_type: data.type,
        i_ramusage: parseFloat(data.ramusage),
        i_cpuusage: parseFloat(data.cpuusage),
        i_utctime:Number(data.utctime),
      });
    new_device2.save(function(err,rows){
    if(err) throw err;
      });
    }
});
socket[client].on('end', () => {
  console.log('Ended')
});
socket[client].on('error', () => console.log('client disconnect'));

});


server.listen(8000, () => {
  console.log('server bound');
});

//tls server end

var httpServer = http.createServer(app);
var httpsServer = https.createServer(credentials, app);

httpServer.listen(80,() =>{
    console.log("http server bound");
});
httpsServer.listen(443, () => {
    console.log("https server bound");
});