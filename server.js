const express = require('express');
const app = express();

app.use('/static', express.static(__dirname + '/public/'));

app.get('/', function (req, res) {
  res.sendfile(__dirname + '/src/index.html');
});
    

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});