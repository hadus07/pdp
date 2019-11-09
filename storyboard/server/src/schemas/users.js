import { Schema, model } from 'mongoose'

const userSchema = new Schema({
    email: String,
    password: String,
    stories: [Schema.Types.ObjectId],
    date_created: {
        type: Date,
        default: Date.now, 
    },
    avatar: {
        type: String,
        default: 'localhost:4000/avatars/avatar.png'
    },
    name: {
        type: String,
        default: `New_User@${Math.random().toString().slice(2, 8)}`,
    },
})

export const User = model('Users', userSchema)