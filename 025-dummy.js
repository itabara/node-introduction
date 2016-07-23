/**
 * Created by Iulian on 23/07/16.
 */
'use strict';

var fun = require('./006-mathfun');

process.on('message', function(m){
   if (m.cmd === 'done'){
       process.exit();
   }
   else if (m.cmd ==='double'){
       console.log('hs: I was asked to double: ' + m.number);
       fun.evenDoubler(m.number, function(err, result){
           process.send({answer: result});
       });
   }
});