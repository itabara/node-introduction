/**
 * Created by Iulian on 23/07/16.
 */
'use strict';

var fork = require('child_process').fork;

var child = fork(__dirname + '/025-dummy.js');

child.on('message', function(m){
    console.log('The answer is: ', m.answer);
    child.send({cmd: 'done'});
});

child.send({cmd: 'double', number: 20});