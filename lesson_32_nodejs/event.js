const EventEmitter = require('events')

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter()

myEmitter.on('nimadirboldi', () => {
  console.log('Tugadi')
})

let counter = 1
setInterval(() => {
    console.log(counter)
    if(counter === 5) {
        myEmitter.emit('nimadirboldi')
    }
    counter++
}, 1000)