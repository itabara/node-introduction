/**
 * Created by Iulian on 23/07/16.
 */
'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf8');

process.stdin.on('data', function(chunk){
    process.stdout.write('Data! -> ' + chunk);
});

// On pressing CTRL+D
process.stdin.on('end', function(){
    process.stderr.write('End!\n');
});


// from another terminal -> kill -TERM pidid
process.on('SIGTERM', function(){
    process.stderr.write('You sure you want to terminate the process ?');
});

console.log('Node is running as process #' + process.pid);