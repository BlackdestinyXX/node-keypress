"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const readline = require("readline");
readline.emitKeypressEvents(process.stdin);
let keyPressCallback = (keyObject) => {
    return console.log("Please insert a callback for handle keypress");
};
process.stdin.setRawMode(true);
process.stdin.on('keypress', (str, key) => {
    keyPressCallback(key);
});
class NodeKeyboard {
    onKeypress(callback) {
        keyPressCallback = callback;
    }
}
exports.default = NodeKeyboard;
