const express = require('express')
const path = require('path')
const router = require('./api/v1/users')

const server = express()

const myMiddleware = (req, res, next) => {
    req.originalUrl = '/test'
    next()
}

server.set('view engine', 'ejs')
server.use(myMiddleware)
// server.use(express.static(path.join(__dirname, 'public')))
// server.use('/api/v1/users', router)

server.get('/', (req, res) => {
    let data = {user: { name: 'Ibrohim' }}
    res.render('index', data)
})

server.listen(4444, () => console.log('Server started'))