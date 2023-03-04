"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var app_model_1 = require("./app.model");
var app = express();
var port = 8000;
app.get('/', function (req, res) {
    res.send({ cats: app_model_1.Cat });
});
app.get('/cats/blue', function (req, res) {
    res.send({ blue: app_model_1.Cat[0] });
});
app.get('/cats/som', function (req, res) {
    res.send({ blue: app_model_1.Cat[1] });
});
app.listen(port, function () {
    console.log("Example app listening on port " + port);
});
//# sourceMappingURL=app.js.map