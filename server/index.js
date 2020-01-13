const express = require('express');
const socket = require('socket.io');
const helpers = require('./helpers.js')

//App Setup
const app = express();
const server = app.listen(4000, function() {
    console.log("Listening port 4000");
});

// var connectedUsers = {};
const watchlist = {};

// Socket Setup
const io = socket(server);

io.on('connection', function(socket) {
    
    // Add connection to the accepted connections to watch
    watchlist[socket.id] = helpers.currencyWatcher();
    
    // Add watch event when user updates parameters for data to watch
    socket.on('watch', function(data) {
        const { interval, value, currency } = data;
        watchlist[socket.id].stopWatcher();
        watchlist[socket.id].setWatcher({ socket, interval, value, currency });
        watchlist[socket.id].startWatcher();
    });

    // Add event to remove connection from list when user disconect
    socket.on('disconect', function() {
        if (watchlist[socket.id]) {
            watchlist[socket.id].stopWatcher();
            delete watchlist[socket.id];
        }
    })
})
