/**
 * Created by Iulian on 23/07/16.
 */
"use strict";

var handleTimeout = function(){
    console.log('Timeout of 200 ms');
};

setTimeout(handleTimeout, 200);

console.log('Running !');