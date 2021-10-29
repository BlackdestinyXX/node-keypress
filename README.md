# node-keypress

When a user press a key of the keyboard, an event will be sended to you.

## Installation
```bash
npm i node-keypress
```

## Example
```js
const { NodeKeyboard } = require("node-keypress")
const keyboard = new NodeKeyboard()

keyboard.onKeypress(function(key) {
    console.log(key)
})
```