import path from 'path'
import cors from 'cors'
import express from 'express'
import { user } from './api/user'
import { login } from './api/login'
import { story } from './api/story'
import { connect, connection } from 'mongoose'
import { registration } from './api/registration'

connect('mongodb://localhost/storyboard', {useNewUrlParser: true})

const server = express()

server.use(cors())
server.use(express.json({ limit: '3mb' }))
server.use(express.static(path.join(__dirname, '../public')))

server.use('/api/user', user)
server.use('/api/login', login)
server.use('/api/story', story)
server.use('/api/registration', registration)

const PORT = process.env.PORT || 4000
connection.once('open', () => server.listen(PORT, () => console.log('Tugadi')))
