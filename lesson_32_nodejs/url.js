const url = require('url')

let myURL = new URL('https://nodejs.org')

console.log(myURL.urlSearchParams.get())