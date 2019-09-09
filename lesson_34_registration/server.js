const fs = require('fs')
const path = require('path')
const http = require('http')
const uuidv4 = require('uuid/v4')

const server = http.createServer((req, res) => {

    let data = ''
    req.on('data', chunk => data += chunk)

    req.on('end', () => {
        let id = uuidv4()

        fs.readFile(path.join(__dirname, 'users.txt'), 'utf8', (err, userInfo) => {
            if(err) throw err

            if(userInfo === '' && userInfo.indexOf(JSON.parse(data).username) === -1) {
                fs.appendFile(
                path.join(__dirname, 'users.txt'),
                `${JSON.stringify({id, ...JSON.parse(data)})}\n`,
                err => {
                    if(err) throw err
                    console.log('Success!')
                    res.writeHead(200, {
                        'Content-Type': 'application/json',
                        'Access-Control-Allow-Origin': '*',
                    })
                    res.end(JSON.stringify({
                        id,
                        status: 'success',
                        message: 'You have successfully registered',
                    }))
                })
            }else {
                res.writeHead(200, {
                        'Content-Type': 'application/json',
                        'Access-Control-Allow-Origin': '*',
                    })
                    res.end(JSON.stringify({
                        status: 'fail',
                        message: 'Username already exists',
                    }))
            }
        })        
    })

})

server.listen(3030)