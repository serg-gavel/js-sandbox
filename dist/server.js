'use strict';

var http = require('http');

http.createServer(function (req, res) {
    console.log(req.url);
    console.log(req.method);
    console.log(req.headers);

    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Node.js basics');
}).listen(3000, function () {
    return console.log('Server works correct');
});