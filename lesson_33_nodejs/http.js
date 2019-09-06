const http = require('http')
const fs = require('fs')
const path = require('path')

const server = http.createServer((req, res) => {

    let link = path.join(
        __dirname,
        '/public',
        req.url === '/' ? 'index.html' : req.url,
    )

    let ext = path.extname(link)

    let contentType = 'text/html'
    switch(ext) {
        case '.css':
            contentType = 'text/css'
            break
        case '.png':
            contentType = 'image/png'
            break
        case '.jpg':
            contentType = 'image/jpeg'
            break
    }

    fs.readFile(link, ext === '.png' ? null : 'utf8', (err, data) => {
        if(err) {
            if(err.code === 'ENOENT') {
                fs.readFile(
                    path.join(__dirname, '/public', '404.html'),
                    'utf8', 
                    (err, data) => {
                        if(err) throw err
                        res.writeHead(200, {'Content-Type': contentType})
                        res.end(data)
                    }
                )
            }
        }
        else {
            res.writeHead(200, {'Content-Type': contentType})
            res.end(data)
        }
    })

})

let port = process.env.PORT || 8008

server.listen(port, () => console.log('Server ishga tushdi'))