import path from 'path'
import { connect, connection } from 'mongoose'
import express from 'express'
import { registration } from './api/registration'

connect('mongodb://localhost/storyboard', {useNewUrlParser: true})

const server = express()
server.use(express.json())
server.use(express.static(path.join(__dirname, '../public')))

server.use('/api/registration', registration)

const PORT = process.env.PORT || 4000
connection.once('open', () => server.listen(PORT, () => console.log('Tugadi')))