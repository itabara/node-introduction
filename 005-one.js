/**
 * Created by Iulian on 23/07/16.
 */
'use strict';

var counter = 2;

var doIt = function(i, callback){
    // do something, invoke callback
    console.log("Showing: " + i);
    var x = ++i;
    callback(null, 'The value incremented ' + x);
};

module.exports.doIt = doIt;

module.exports.foo = "foo";