/**
 * Created by Iulian on 23/07/16.
 */
'use strict';

var one = require('./005-one');

one.doIt(33, function(err, result){
    console.log("My result from callback: " + result);
});

console.log(one.foo);

// not exported
console.log(one.counter);