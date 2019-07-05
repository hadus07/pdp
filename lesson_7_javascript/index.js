// E'tibor bermang
function write(str) {document.write(str + '<br>')}
// E'tibor bermang


/* let name = "PDP"
const pi = 3.14
let result = 100 */

let raqam = 9
let str = "JavaScript"

write(String(raqam)) // '9'
write(typeof String(raqam)) // string
write(Number(str)) // NaN
write(typeof Number(str)) // number

let raqam2 = raqam + ""
write(typeof raqam2) // string
write(typeof raqam.toString()) // string

write(1 == '1') // true
write(1 === '1') // false