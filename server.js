var fs = require('fs');
var http = require('http');
var https = require('https');
var privateKey = fs.readFileSync('selfsigned.key', 'utf8');
var certificate = fs.readFileSync('selfsigned.crt', 'utf8');

var credentials = { key: privateKey, cert: certificate };
var express = require('express');
var app = express();

// your express configuration here
app.use(express.static('./'))


var httpServer = http.createServer(app);
var httpsServer = https.createServer(credentials, app);

httpServer.listen(8080);
httpsServer.listen(8443);
console.log(
    `
    http://localhost:8080/
    https://localhost:8443/
    `
);