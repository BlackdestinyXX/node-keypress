import NodeKeyboard from './index'

let keylistener = new NodeKeyboard();

keylistener.onKeypress(function(key: any): void {
    console.log(key)
})