import { Router } from 'express'
import { checkToken } from '../helpers'

const story = Router()

story.post('/', checkToken, async (req, res) => {
    console.log(req.user)
})

export { story }