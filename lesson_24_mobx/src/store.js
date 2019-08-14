import { observable, action } from 'mobx'

const store = observable({
    users: []
})

const getUsers = action(() => {
    fetch('https://randomuser.me/api/?results=10')
    .then(res => res.json())
    .then(res => {
        console.log(res)
        store.users = res.results
    })
    .catch(err => console.log(err))
})

getUsers()

export const getAll = () => {
    return store.users.length
}

export const getMales = () => {
    return store.users.filter(user => user.gender === 'male').length
}

export const deleteUser = action(id => {
    store.users = store.users.filter(user => user.login.uuid !== id)
})

export default store

// class Store {
//     constructor() {
//         this.users = observable([])
//         this.getUsers()
//     }

//     getUsers = action(() => {
//         fetch('https://randomuser.me/api/?results=10')
//         .then(res => res.json())
//         .then(res => {
//             console.log(res)
//             this.users = res.results
//         })
//         .catch(err => console.log(err))
//     })

//     getAll = () => {
//         return this.users.length
//     }
//     getMales = () => {
//         return this.users
//             .filter(user => user.gender === 'male').length
//     }
//     deleteUser = action(id => {
//         this.users = 
//             this.users
//                 .filter(user => user.login.uuid !== id)
//     })
// }

// const store = new Store()
// export default store