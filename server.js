var express = require ('express');
var app = express();
var mongoose = require('mongoose');

// mongoose.connect('mongodb://<dbuser>:<dbpassword>@ds063859.mongolab.com:63859/lukey')
app.use(express.static(__dirname + '/'));


app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

// app.use('/js', express.static(__dirname + '/client/js'));


// app.get('/api/meetups', meetupsController.list);


// app.post('/api/meetups', meetupsController.create);


app.listen(3000, function(){
  console.log("listening on 3000")
})