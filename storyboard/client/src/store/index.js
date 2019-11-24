import { observable, action } from 'mobx'

export let User = observable({
    name: '',
    email: '',
    avatar: '',
    stories: [],
    token: localStorage.getItem('token'),
})

export const setUser = action(data => {
    User = { ...User, ...data }
    localStorage.setItem('token', data.token)
    console.log(User)
})