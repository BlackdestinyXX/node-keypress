"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Import "readline" library
const readline = require("readline");
// Set "process.stdin" as receiver of keypress events
readline.emitKeypressEvents(process.stdin);
// Variable that rapresents default callback, changed when "onKeypress" method is called
let keyPressCallback = (keyObject) => {
    return console.log("Please insert a callback for handle keypress");
};
// Set RawMode to true, for receive entire object from the event
process.stdin.setRawMode(true);
// Listen for keypress event
process.stdin.on('keypress', (str, key) => {
    // Call "keyPressCallback" as callback
    keyPressCallback(key);
});
/**
 * @description Main class of the library
 * @author Bl4ckdestinyXX
 **/
class NodeKeyboard {
    /**
     * @description Main class of the library
     * @author Bl4ckdestinyXX
     * @param { Function } => Callback when a key is pressed
    **/
    onKeypress(callback) {
        // Assign to "keyPressCallback" passed callback
        keyPressCallback = callback;
    }
}
exports.default = NodeKeyboard;
