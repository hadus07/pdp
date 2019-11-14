import { CYPHER } from './env'
import aes from 'crypto-js/aes'

export const sendError = error => ({ error })

export const generateToken = email => {
    let str = `${email}|${new Date().valueOf() + (3600000 * 24)}`
    return aes.encrypt(str, CYPHER.toString()).toString()
}