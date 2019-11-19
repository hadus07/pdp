import path from 'path'
import express from 'express'
import { login } from './api/login'
import { story } from './api/story'
import { connect, connection } from 'mongoose'
import { registration } from './api/registration'

connect('mongodb://localhost/storyboard', {useNewUrlParser: true})

const server = express()
server.use(express.json())
server.use(express.static(path.join(__dirname, '../public')))

server.use('/api/login', login)
server.use('/api/story', story)
server.use('/api/registration', registration)

const PORT = process.env.PORT || 4000
connection.once('open', () => server.listen(PORT, () => console.log('Tugadi')))
