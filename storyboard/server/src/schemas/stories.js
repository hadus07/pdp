import { URL } from '../env'
import { Schema, model } from 'mongoose'

const storySchema = new Schema({
    title: String,
    content: String,
    category: String,
    date_created: {
        type: Date,
        default: Date.now, 
    },
    author: {
        ref: 'Users',
        type: Schema.Types.ObjectId,
    },
    cover: {
        type: String,
        default: `${URL}/covers/cover.png`
    },
})

export const Story = model('Stories', storySchema)