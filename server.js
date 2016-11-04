'use-strict';

// Node Packages

var http = require('http');
var fs = require('fs');

var url = 'https://api.pwrtelegram.xyz/bot00000:SOMERANDOMSHITHERETOO/getChat';
var port = process.env.PORT || 8080;

function status(req, res) {
       http.get(url, function (response) {
            // Its Online
            res.writeHead(200, {
                'Content-Type': 'text/html'
            });
            fs.createReadStream('./public/200.html').pipe(res);
        }).on('error', function(e) {
            // Its Offline
            res.writeHead(200, {
                'Content-Type': 'text/html'
            });
            fs.createReadStream('./public/404.html').pipe(res);            
    });
};
http.createServer(status).listen(port);