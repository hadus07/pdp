import React from 'react'
import User from './User'
import store from './store'
import { observer } from 'mobx-react'

export default observer(class List extends React.Component {
    render() {
        return store.users.map(user => (
            <User key={user.login.uuid} {...user}/>
        ))
    }
})