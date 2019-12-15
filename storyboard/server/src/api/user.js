import { Router } from 'express'
import { checkToken } from '../helpers'
import { Story } from '../schemas/stories'

const user = Router()

user.post('/', checkToken, async (req, res) => {
    let opts = {path: 'stories', select: '*'}
    let { _id, stories, avatar, name, email } = req.currentUser
    let strs = await Story.find({ _id: stories }).populate(opts)
    
    res.json({ name, email, _id, avatar, stories: strs })
})

export { user }