import { Api } from '../api'
import { getToken } from '../helpers'
import { observable, action } from 'mobx'

export const User = observable({
    _id: '',
    name: '',
    email: '',
    avatar: '',
    stories: [],
    loading: true,
})

export const setUser = action(async () => {
    let user = await Api('user', { token: getToken() }, 'post')
    User._id = user._id
    User.name = user.name
    User.email = user.email
    User.avatar = user.avatar
    User.stories = user.stories
    User.loading = false
})