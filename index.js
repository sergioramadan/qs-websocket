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

io.on('connection', function(socket) {
    console.log('made socket connection', socket.id);
    
    socket.emit('setPrice', 200);

    socket.on('watch', function(data) {
        let { interval, value, currency } = data;
        
        socket.emit('setPrice', newPrice);
    });
})
