/**
 * Created by Iulian on 23/07/16.
 */
'use strict';

var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req, res){
    // process request
    res.writeHead(200, {'Content-Type' : 'text/plain'});

    if (req.url === '/file.txt') {
        fs.createReadStream(__dirname + '/file.txt').pipe(res);
    } else {
        res.end('Hello World');
    }
});

var port = 3000;

server.listen(port, '127.0.0.1');

console.log('Server listening on port: ' + port);