var express = require('express');
var socket = require('socket.io');

//App Setup
var app = express();
var server = app.listen(4000, function() {
    console.log("Listening port 4000");
});

// Static Files
// app.use(express.static('public'));
// app.use(express.static('client/dist'));

// Socket Setup
var io = socket(server);

io.on('connection', function() {
    console.log('made socket connection');
})
