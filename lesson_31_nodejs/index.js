const fs = require('fs')
const path = require('path')

// fs.readFile(
//     path.join(__dirname, 'test.js'),
//     'utf8',
//     (err, data) => {
//         if (err) {
//             console.log(err)
//         } else {
//             eval(data)
//         }
//     },
// )

let p = ''
let start = 'a'
while(start <= 'z') {
    fs.mkdirSync(
        path.join(__dirname, p, start),
        { recursive: true },
    )

    p += start + '/'
    console.log(start)
    start = String.fromCharCode(start.charCodeAt() + 1)
    console.log(start)
}

// console.log(path.join(__dirname, 'a/b/c', 'd'))