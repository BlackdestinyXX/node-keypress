"use strict";
exports.__esModule = true;
// Import "readline" library
var readline = require("readline");
// Set "process.stdin" as receiver of keypress events
readline.emitKeypressEvents(process.stdin);
// Variable that rapresents default callback, changed when "onKeypress" method is called
var keyPressCallback = function (keyObject) {
    return console.log("Please insert a callback for handle keypress");
};
// Set RawMode to true, for receive entire object from the event
process.stdin.setRawMode(true);
// Listen for keypress event
process.stdin.on('keypress', function (str, key) {
    // Call "keyPressCallback" as callback
    keyPressCallback(key);
});
/**
 * @description Main class of the library
 * @author Bl4ckdestinyXX
 **/
var NodeKeyboard = /** @class */ (function () {
    function NodeKeyboard() {
    }
    /**
     * @description Main class of the library
     * @author Bl4ckdestinyXX
     * @param { Function } => Callback when a key is pressed
    **/
    NodeKeyboard.prototype.onKeypress = function (callback) {
        // Assign to "keyPressCallback" passed callback
        keyPressCallback = callback;
    };
    return NodeKeyboard;
}());
exports["default"] = NodeKeyboard;
