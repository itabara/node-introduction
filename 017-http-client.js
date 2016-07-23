/**
 * Created by Iulian on 23/07/16.
 */
'use strict';

var http = require('http');

var options = {
    host: 'www.google.com',
    port: 80,
    path: '/',
    method: 'GET'
};

console.log("Going to make a request...");

var req = http.request(options, function(response){
    console.log(response.statusCode);
    response.pipe(process.stdout);
});

req.end();