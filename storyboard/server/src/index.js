import path from 'path'
import express from 'express'
import { User } from './schemas/users'
import { connect, connection } from 'mongoose'

connect('mongodb://localhost/storyboard', {useNewUrlParser: true})

const server = express()
server.use(express.static(path.join(__dirname, '../public')))

server.get('/api', (req, res) => {
    User.insertMany([{ email: 'test@test.com' }])
        .catch(err => console.log('db error'))
})

const PORT = process.env.PORT || 4000
connection.once('open', () => server.listen(PORT, () => console.log('Tugadi')))