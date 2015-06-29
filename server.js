console.log(process.env);
var PORT = (process.env.PORT || 5000);

var Pusher = require('pusher');
var travisHandler = require("./lib/travisHandler")(Pusher);

var express = require('express');
var server = require("./lib/server.js")(express);

server.attachHandler('/travis', travisHandler);
server.listen(PORT);
console.log('Webhook Server started... port: ' + PORT);

var healthserver = require("./lib/healthserver.js")(express);
healthserver.listen(8080);
console.log('Health Check Server started... port: 8080');
