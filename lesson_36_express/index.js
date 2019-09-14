const uuid = require('uuid')
const express = require('express')
const path = require('path')
const fs = require('fs')

const server = express()

server.use(express.urlencoded({ extended: true }))

server.get('/api/users', (req, res) => {
    let page = parseInt(req.query.page || 1)
    let len = parseInt(req.query.results || 6)
    fs.readFile(path.join(__dirname, 'data.json'), 'utf8', (err, data) => {
        let users = JSON.parse(data)
        res.json({
            page: page,
            results: len,
            data: users.splice((page-1)*len, len)
        })
    })
})

server.listen(2222, () => console.log('Server started'))