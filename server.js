const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();

app.get('/', function (req, res) {
    res.sendfile(__dirname + '/src/index.html');
    });

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});