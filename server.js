var express = require('express');
var multer = require('multer');
var upload = multer({dest: './uploads'});

var app = express();

var PORT = 8080;

app.use(express.static(__dirname+'/views'));

app.set('views', './views');

app.set('view engine', 'jade');

app.get('/', function(req, res){
   res.render('index.jade'); 
});

var data_size;

app.post('/upload',upload.single('File'),function(req,res){
    data_size = req.file.size;
    res.send({redirect: '/get-file-size'});
});

app.get('/get-file-size', function(req, res){
   res.json({'size': data_size}); 
});

app.listen(PORT, function(){
    console.log('Express listening on port: '+PORT);
});