import { URL } from '../env'
import { Schema, model } from 'mongoose'

const userSchema = new Schema({
    email: String,
    password: String,
    date_created: {
        type: Date,
        default: Date.now, 
    },
    stories: [{
        ref: 'Stories',
        type: Schema.Types.ObjectId,
    }],
    avatar: {
        type: String,
        default: `${URL}/avatars/avatar.png`
    },
    name: {
        type: String,
        default: `New_User@${Math.random().toString().slice(2, 8)}`,
    },
})

export const User = model('Users', userSchema)