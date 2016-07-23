/**
 * Created by Iulian on 23/07/16.
 */
'use strict';

var exec = require('child_process').exec;

var child = exec('uptime', function(err, stout, stderr){
    if (err){
        console.log('Error: ' + stderr);
    } else{
        console.log('Output is: ' + stout);
    }
});

console.log('PID is ' + child.pid);