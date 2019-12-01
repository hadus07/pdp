import { Router } from 'express'
import { User } from '../schemas/users'
import { Story } from '../schemas/stories'
import { checkToken, sendError } from '../helpers'

const story = Router()

story.get('/', async (req, res) => {
    let opts = {
        path: 'author',
        select: 'name avatar',
    }
    res.json(await Story.find().populate(opts))
})

story.delete('/', checkToken, async (req, res) => {
    let { id } = req.body
    await User.findByIdAndUpdate(
        req.currentUser._id,
        { $pull: { stories: id } },
    )
    await Story.findByIdAndDelete(id)
    res.json({ id })
})

story.post('/', checkToken, async (req, res) => {
    let story = req.body
    story.author = req.currentUser._id

    let addedStory = await Story.insertMany([story])
    
    await User.findByIdAndUpdate(
        req.currentUser._id,
        { $push: { stories: addedStory[0]._id } }
    )

    res.json(addedStory[0])
})

export { story }