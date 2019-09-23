const express = require('express')
const mongoose = require('mongoose')
const Users = require('./models/users')

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

server.post('/api/users', (req, res) => {
    // console.log(req.body)

    Users
        .findOne({ username: req.body.username })
        .exec((err, data) => {
            console.log(data)
            if(err) {
                res.sendServerError()
            }else if(data && data.username === req.body.username) {
                res.status(200).json({message: "Username taken"})
            }else {
                const newUser = new Users(req.body)
                newUser.save((err, data) => {
                    if(err) {
                        console.log(err)
                    }else {
                        res.status(200).json(
                            {message: "Success", user_id: data._id}
                        )
                    }
                })
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
        .findOne({ _id:  req.params.userId}, { __v: 0, password: 0 })
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

db.on('error', () => console.log('Cannot connect to db'))
db.once('open', () => {
    server.listen(2222, () => console.log('Server started'))
})

