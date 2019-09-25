const express = require('express')
const mongoose = require('mongoose')
const Users = require('./models/users')
const fs = require('fs')
const path = require('path')

mongoose.connect(
    'mongodb://localhost:27017/test',
    { useNewUrlParser: true }
)

const sendServerError = (req, res, next) => {
    res.sendServerError = () => {
        status(500).json({error: "Internal server error"})
    }
    next()
}

const db = mongoose.connection
const server = express()
server.use(express.json())
server.use(sendServerError)
server.use((req, res, next) => {
    res.append('Access-Control-Allow-Origin', ['*']);
    res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.append('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

server.post('/api/users', (req, res) => {
    // console.log(req.body)

    Users
        .findOne({ username: req.body.username })
        .exec((err, data) => {
            // console.log(data)
            if(err) {
                res.sendServerError()
            }else if(data && data.username === req.body.username) {
                res.status(200).json({message: "Username taken"})
            }else {
                let imageName = Math.random().toString().slice(2) + '.jpeg'
                fs.writeFile(
                    path.join(__dirname, 'images/', imageName),
                    req.body.image,
                    'binary',
                    (err, writtenImage) => {
                        if(err) {
                            console.log(err)
                        }else {
                            let tmp = req.body
                            tmp.image = 'https://localhost:2222/images/' + imageName
                            console.log(tmp)
                            
                            Users.insertMany([tmp], (err, data) => {
                                if(err) {
                                    console.log(err)
                                }else {
                                    res
                                        .status(200)                            
                                        .json({message: "Success", user_id: data._id})
                                }
                            })
                        }
                    },
                )
            }
        })
})

server.get('/api/users', (req, res) => {
    Users
        .find({}, {__v: 0, password: 0})
        .exec((err, data) => {
            if(err) {
                res.sendServerError()
            }else {
                res.status(200).json({count: data.length, data: data})
            }
        })
})

server.get('/api/users/:userId', (req, res) => {
    Users
        .findOne(
            { _id:  req.params.userId},
            { __v: 0, password: 0 },
        )
        .exec((err, data) => {
            if(err) {
                res.sendServerError()
            }else {
                res.status(200).json(data)
            }
        })
})

server.delete('/api/users/:userId', (req, res) => {
    Users
        .remove({ _id:  req.params.userId})
        .exec((err, data) => {
            if(err) {
                res.sendServerError()
            }else {
                console.log(data)
                if(data.n === 1) {
                    res.status(200).json({message: "Delete success"})
                }else {
                    res.status(200).json({message: "Users doesnt exists"})
                }
            }
        })
})

const PORT = process.env.PORT || 2222

db.on('error', () => console.log('Cannot connect to db'))
db.once('open', () => {
    server.listen(PORT, () => console.log('Server started'))
})

