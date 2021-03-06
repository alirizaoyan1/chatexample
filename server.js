var express = require('express');
var path = require('path');
var loginRouter = require('./routes/loginRouter');
var anasayfaRouter = require('./routes/anasayfaRouter');



var app = express();
var server= app.listen(3000);
var io = require('socket.io').listen(server);
var bodyParser = require('body-parser');
var db = require('./models/db');
app.use('/public',express.static(path.join(__dirname,'public')));
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'/views'));

app.use(bodyParser.urlencoded({extended : false}));
app.use(bodyParser.json());

app.use('/login',loginRouter);
app.use('/anasayfa',anasayfaRouter);




io.sockets.on("connection",function (socket) {
    socket.on("gonder",function (data) {
        io.emit("alici",data);
    });
})