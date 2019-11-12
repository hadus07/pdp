import aes from 'crypto-js/aes'
import { CYPHER } from '../env'
import { Router } from 'express'
import sha256 from 'crypto-js/sha256'
import { User } from '../schemas/users'

const registration = Router()

registration.post('/', async (req, res) => {
    let user = req.body
    let dbRes = await User.findOne({ email: user.email })
    if(!dbRes) {
        user.password = sha256(user.password)
        let addedUser = await User.insertMany([user])
        if (addedUser) {
            let str = `${user.email}|${new Date().valueOf() + (3600000 * 24)}`
            let token = aes.encrypt(str, CYPHER.toString())
            res.json({ token: token.toString() })
        } else {
            res.json({ error: 'cannot_create_user' })    
        }
    } else {
        res.json({ error: 'user_already_exists' })
    }
})

export { registration }