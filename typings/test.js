"use strict";
exports.__esModule = true;
var index_1 = require("./index");
var keylistener = new index_1["default"]();
keylistener.onKeypress(function (key) {
    console.log(key);
});
