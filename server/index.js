var express = require('express');
var socket = require('socket.io');
var helpers = require('./helpers.js')

//App Setup
var app = express();
var server = app.listen(4000, function() {
    console.log("Listening port 4000");
});

// var connectedUsers = {};
var watchlist = {};

// Socket Setup
var io = socket(server);

io.on('connection', function(socket) {
    console.log('made socket connection', socket.id);

    console.log(helpers.currencyWatcher.setWatcher);
    socket.on('watch', function(data) {
        let { interval, value, currency } = data;

        if (!watchlist[socket.id]) {
            watchlist[socket.id] = helpers.currencyWatcher();
        } else {
            watchlist[socket.id].stopWatcher();
        }

        watchlist[socket.id].setWatcher({ socket, interval, value, currency });
        watchlist[socket.id].startWatcher();
    });

    socket.on('disconect', function() {
        console.log('user was disconected');
        watchlist[socket.id].stopWatcher();
        delete watchlist[socket.id];
    })
})
