import { CYPHER } from './env'
import utf8 from 'crypto-js/enc-utf8'
import { User } from './schemas/users'
import { encrypt, decrypt } from 'crypto-js/aes'

const OFFSET = 1000 * 60 * 60 * 24 // a day

export const sendError = error => ({ error })

export const generateToken = email =>
    encrypt(`${email}|${new Date().valueOf() + OFFSET}`, CYPHER).toString()

export const checkToken = async (req, res, next) => {
    let { token } = req.body

    if (token) {
        let [email, expDate] = decrypt(token, CYPHER).toString(utf8).split('|')

        if (expDate <= new Date().valueOf()) {
            res.json(sendError('token_expired'))
        } else {
            let user = await User.findOne({ email })
            if (user) {
                req.currentUser = user
                delete req.body.token
                next()
            } else {
                res.json(sendError('invalid_token'))
            }
        }
    } else {
        res.json(sendError('no_token_sent'))
    }
}
