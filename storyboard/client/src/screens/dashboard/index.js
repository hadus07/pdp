import React from 'react'
import { observer } from 'mobx-react'
import styles from './index.module.sass'
import { Input } from '../../components/input'
import { Button } from '../../components/button'
import { User, setUser } from '../../store/users'
import { SingleStory } from '../../components/single-story'

export const Dashboard = observer(class Dashboard extends React.Component {

    componentDidMount = async () => {
        await setUser()
    }

    handleDelete = () => {
        let answer = window.confirm('Are you sure to delete this story?')
        console.log(answer)
    }

    render() {
        return User.loading ? <p>Loading...</p> : (
            <div className={styles.wrapper}>
                <div className={styles.bar}>
                    <div className={styles.row}>
                        <img src={User.avatar} alt="Avatar"/>
                        <p>{User.name}</p>
                    </div>
                    <p>Total: {User.stories.length}</p>
                </div>
                <div className={styles.cont}>
                    <div className={styles.storyCont}>
                        {User.stories.map(item => (
                            <SingleStory {...item} onClick={this.handleDelete}/>
                        ))}
                    </div>
                    <div className={styles.profileCont}>
                        <div className={styles.imgCont}>
                            <img src={User.avatar} alt='Avatar'/>
                            <Button title='Upload avatar'/>
                        </div>
                        <Input placeholder='Name'/>
                        <p>Change Password</p>
                        <Input placeholder='Old password'/>
                        <Input placeholder='New password'/>
                        <Input placeholder='Confirm password'/>
                        <Button title='Save'/>
                    </div>
                </div>
            </div>
        )
    }
})