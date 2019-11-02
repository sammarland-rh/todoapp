var express = require('express');
var path = require('path');

process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

var app = express();

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.use('/node_modules/todomvc-common/base.css', function(req, res) {
    res.sendFile(path.join(__dirname + '/node_modules/todomvc-common/base.css'));
});

app.use('/node_modules/todomvc-app-css/index.css', function(req, res) {
    res.sendFile(path.join(__dirname + '/node_modules/todomvc-app-css/index.css'));
});

app.use('/node_modules/todomvc-common/base.js', function(req, res) {
    res.sendFile(path.join(__dirname + '/node_modules/todomvc-common/base.js'));
});

app.use('/js', express.static(path.join(__dirname, '/js/')));
app.listen("8080");
module.exports = app;
