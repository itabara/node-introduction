/**
 * Created by Iulian on 23/07/16.
 */
'use strict';

var os = require('os');

console.log("os.tmpDir:   " + os.tmpDir());
console.log("os.hostname: " + os.hostname());
console.log("os.type:     " + os.type());
console.log("os.platform: " + os.platform());
console.log("os.arch: " + os.arch());
console.log("os.release: " + os.release());
console.log("os.uptime: " + os.uptime());
console.log("os.loadavg: " + os.loadavg());
console.log("os.totalmem: " + os.totalmem());
console.log("os.freemem: " + os.freemem());
console.log("os.cpus: " + os.cpus());
console.log("os.networkInterfaces: " + os.networkInterfaces());
console.log("os.EOL: " + os.EOL);