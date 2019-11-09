import React from 'react'
import styles from './index.module.sass'
import { Input } from '../../components/input'
import { Button } from '../../components/button'
import { SingleStory } from '../../components/single-story'

const avatar = 'https://randomuser.me/api/portraits/men/32.jpg'

export const Dashboard = props => {

    const handleDelete = () => {
        let answer = window.confirm('Are you sure to delete this story?')
        console.log(answer)
    }
    
    return (
        <div className={styles.wrapper}>
            <div className={styles.bar}>
                <div className={styles.row}>
                    <img src={avatar} alt="Avatar"/>
                    <p>Hafadiy</p>
                </div>
                <p>Total: 6</p>
            </div>
            <div className={styles.cont}>
                <div className={styles.storyCont}>
                    {[1, 2, 3, 4, 5, 6].map(item => (
                        <SingleStory onClick={handleDelete}/>
                    ))}
                </div>
                <div className={styles.profileCont}>
                    <div className={styles.imgCont}>
                        <img src={avatar} alt='Avatar'/>
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