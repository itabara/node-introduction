/**
 * Created by Iulian on 23/07/16.
 */
'use strict';

var cluster = require('cluster');
var http = require('http');
var numWorkers = 4;

if (cluster.isMaster){
    // fork workers
    for (var i = 0; i < numWorkers; i++){
        console.log('master: about to fork a worker');
        cluster.fork();
    }

    cluster.on('fork', function(worker){
        console.log('master: \'fork\' event (worker ' + worker.id + ')');
    });

    cluster.on('online', function(worker){
        console.log('master: \'online\' event (worker ' + worker.id + ')');
    });

    cluster.on('listening', function(worker, address){
        console.log('master: \'listening\' event (worker ' + worker.id + ', pid ' +
            worker.process.pid + ', ' + address.address + ':' +
            address.port + ')');
    });

    cluster.on('exit', function(worker, code, signal){
        console.log('master: \'exit\' event (worker ' + worker.id + ')');
    });
} else {
    console.log('worker: worker #' + cluster.worker.id + ' ready!');

    // we want to reply 3 times before destroying the worker :D
    var count = 0;

    // Workers can share any TCP connection
    // in this case HTTP server

    http.createServer(function(req, res){
        res.writeHead(200);
        count++;
        console.log('Worker #' + cluster.worker.id + ' is incrementing count to ' + count);
        res.end("Hello world from worker #" + cluster.worker.id + " (pid: " + cluster.worker.process.pid + ")");
        if (count === 3){
            cluster.worker.destroy();
        }
    }).listen("8888", '127.0.0.1');
}