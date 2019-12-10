const express = require('express');
const app = express();

app.use('/static', express.static(__dirname + '/public/'));

app.get('/', function (req, res) {
  res.sendfile(__dirname + '/src/index.html');
});

app.get('/naoobfuscado', function (req, res) {
  res.sendfile(__dirname + '/src/notObfuscate.html');
});

app.get('/indexjs', function (req, res) {
  res.sendfile(__dirname + '/src/index.js');
});
    

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});