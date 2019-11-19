import { URL } from '../env'
import { Schema, model } from 'mongoose'

const storySchema = new Schema({
    title: String,
    content: String,
    category: String,
    author_id: Schema.Types.ObjectId,
    date_created: {
        type: Date,
        default: Date.now, 
    },
    cover: {
        type: String,
        default: `${URL}/covers/avatar.png`
    },
})

export const Story = model('Stories', storySchema)