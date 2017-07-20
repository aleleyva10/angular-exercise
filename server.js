// requires
var express = require('express');
var app = express();
var path = require('path');


// globals
var port = process.env.PORT || 4000;

// uses
app.use(express.static('public'));

//spin up the server
app.listen(port, function(){
  console.log('server up on:', port);
});

// home base route
app.get('/', function(req, res){
  res.sendFile(path.resolve('views/index.html'));
});
