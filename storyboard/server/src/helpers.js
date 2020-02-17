import { CYPHER } from './env'
import aes from 'crypto-js/aes'
import utf8 from 'crypto-js/enc-utf8'
import { User } from './schemas/users'

export const sendError = error => ({ error })

export const generateToken = email => {
    let str = `${email}|${new Date().valueOf() + (3600000 * 24)}`
    return aes.encrypt(str, CYPHER).toString()
}

export const checkToken = async (req, res, next) => {
    let token = req.body.token

    if (token) {
        token = aes.decrypt(token, CYPHER).toString(utf8)
        let [email, expDate] = token.split('|')[0]

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
