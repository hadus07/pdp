import { Router } from 'express'
import sha256 from 'crypto-js/sha256'
import { User } from '../schemas/users'
import { sendError, generateToken } from '../helpers'

const registration = Router()

registration.post('/', async (req, res) => {
    let user = req.body
    let dbRes = await User.findOne({ email: user.email })
    if(!dbRes) {
        user.password = sha256(user.password)
        let addedUser = await User.insertMany([user])
        if (addedUser) {
            res.json({
                name: addedUser[0].name,
                email: addedUser[0].email,
                avatar: addedUser[0].avatar,
                stories: addedUser[0].stories,
                token: generateToken(user.email)
            })
        } else {
            res.json(sendError('cannot_create_user'))    
        }
    } else {
        res.json(sendError('user_already_exists'))
    }
})

export { registration }