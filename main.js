var electronify = require('electronify-server');
var express = require('express');

var port = 3000;
var app = express();

app.use(express.static('./_site/'));

app.listen(port);
console.log('Listening on port ' + port);

electronify({
  url: 'http://localhost:3000',
  noServer: true
});
