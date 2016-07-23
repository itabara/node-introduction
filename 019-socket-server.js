/**
 * Created by Iulian on 23/07/16.
 */
'use strict';

var io = require('socket.io').listen(8000);

io.sockets.on('connection', function(socket){
    socket.emit('news', {hello: 'Hello'});

    socket.on('my other event', function(data){
        console.log(data);
    });
});

console.log('Server running on port: 8000');