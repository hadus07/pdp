import fs from 'fs'
import path from 'path'
import { URL } from '../env'
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
    if (req.body.cover === '') {
        delete req.body.cover
        let addedStory = await Story.insertMany([story])

        await User.findByIdAndUpdate(
            req.currentUser._id,
            { $push: { stories: addedStory[0]._id } }
        )

        res.json({ id: addedStory[0]._id })
    } else {
        let cov = req.body.cover
        let data = cov.slice(cov.indexOf(',') + 1)
        let ext = cov.slice(11, cov.indexOf(';'))
        ext = ext === 'jpeg' ? 'jpg' : ext
        let coverId = Math.random().toString().slice(2, 22)
        let coverName = `${coverId}.${ext}`
        let coverUrl = `${URL}/covers/${coverName}`
        let coverPath = path.join(__dirname, '../..', 'public/covers', coverName)
        
        story.cover = coverUrl

        fs.writeFile(coverPath, data, 'base64', async err => {
                if (err) res.json(sendError('image_write_error'))
                let addedStory = await Story.insertMany([story])
        
                await User.findByIdAndUpdate(
                    req.currentUser._id,
                    { $push: { stories: addedStory[0]._id } }
                )

                res.json({ id: addedStory[0]._id })
            }
        )
    }
})

export { story }