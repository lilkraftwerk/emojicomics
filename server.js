var express = require ('express');
var app = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser')

// mongoose.connect('mongodb://<dbuser>:<dbpassword>@ds063859.mongolab.com:63859/lukey')
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded());
app.use(bodyParser.json({
  limit: 1000000000000
}));


app.get('/', function(req, res){
  console.log("rget get")
  res.sendFile(__dirname + '/index.html');
});

// app.use('/js', express.static(__dirname + '/client/js'));


// app.get('/api/meetups', meetupsController.list);

app.post('/comic', function(req, res){
  console.log(req.body)
})



app.listen(3000, function(){
  console.log("listening on 3000")
})