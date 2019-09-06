const http = require('http')
const fs = require('fs')
const path = require('path')

const server = http.createServer((req, res) => {

    let file = ''

    if(req.url === '/') {
        file = 'index.html'
    }else if(req.url === '/about') {
        file = 'about.html'
    }

    fs.readFile(
        path.join(__dirname, '/public', file),
        'utf8',
        (err, data) => {
            if(err) throw err

            res.writeHead(200, {'Content-Type': 'text/html'})
            res.end(data)
        }
    )
})

server.listen(3000, () => console.log('Server ishga tushdi'))