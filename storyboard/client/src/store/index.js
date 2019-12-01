import { observable, action } from 'mobx'

export const defaultUser = {
    name: '',
    email: '',
    token: '',
    avatar: '',
    stories: [],
}

export let User = observable(JSON.parse(localStorage.getItem('user')) || defaultUser)

export const setUser = action(data => {
    User = { ...User, ...data }
    saveUser(User)
})

export const setUserStory = action(data => {
    User.stories.push(data)
    saveUser(User)
})

const saveUser = data => {
    localStorage.setItem('user', JSON.stringify(data))
    console.log(User)
}