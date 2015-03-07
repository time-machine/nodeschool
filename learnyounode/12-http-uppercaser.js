var http = require('http');
var map = require('through2-map');

var server = http.createServer(function(req, res) {
  if (req.method !== 'POST') {
    return res.end('send me a POST\n');
  }

  req.pipe(map(function(chuck) {
    return chuck.toString().toUpperCase();
  })).pipe(res);
});

server.listen(process.argv[2]);