import { Router } from 'express'
import sha256 from 'crypto-js/sha256'
import { User } from '../schemas/users'
import { sendError, generateToken } from '../helpers'

const login = Router()

login.post('/', async (req, res) => {
    let user = req.body
    const dbUser = await User.findOne({ email: user.email })

    if(dbUser) {
        if (sha256(user.password).toString() === dbUser.password) {
            res.json({ token: generateToken(user.email) })
        } else {
            res.json(sendError('incorrect_password'))
        }
    } else {
        res.json(sendError('user_not_found'))
    }
})

export { login }