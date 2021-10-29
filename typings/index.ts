const readline = require("readline")

readline.emitKeypressEvents(process.stdin);

let keyPressCallback = (keyObject: any): void => {
    return console.log("Please insert a callback for handle keypress")
}

process.stdin.setRawMode(true);

process.stdin.on('keypress', (str, key) => {
    keyPressCallback(key)
});

export default class NodeKeyboard {

    onKeypress(callback: any): void {
        keyPressCallback = callback;
    }

}