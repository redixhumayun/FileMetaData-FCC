var express = require('express');

var app = express();

var PORT = 8080;

app.listen(PORT, function(){
    console.log('Express listening on port: '+PORT);
});