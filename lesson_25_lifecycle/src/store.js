import { observable, action } from 'mobx'

const store = observable({
    count: JSON.parse(window.localStorage.getItem('count')) || 0
})

export const changeCount = action(() => {
    store.count = store.count + 1
    window.localStorage.setItem('count', store.count)
    console.log(store.count)
})

export const clearCount = action(() => {
    store.count = 0
    window.localStorage.setItem('count', store.count)
    console.log(store.count)
})

export default store