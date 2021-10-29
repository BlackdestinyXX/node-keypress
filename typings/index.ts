const readline = require("readline")

readline.emitKeypressEvents(process.stdin);

let keyPressCallback = (keyObject: any): void => {
    return console.log("Please insert a callback for handle keypress")
}

process.stdin.setRawMode(true);

process.stdin.on('keypress', (str, key) => {
    keyPressCallback(key)
});

/**
 * @description Main class of the library
 * @author Bl4ckdestinyXX
 **/
export default class NodeKeyboard {

    /**
     * @description Main class of the library
     * @author Bl4ckdestinyXX
     * @param { Function } => Callback when a key is pressed
    **/
    onKeypress(callback: any): void {
        keyPressCallback = callback;
    }

}