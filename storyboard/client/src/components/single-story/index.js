import React from 'react'
import { observer } from 'mobx-react'
import { User } from '../../store/users'
import styles from './index.module.sass'

export const SingleStory = observer(props => (
    <div className={styles.list}>
        <img src={props.cover} alt='Book cover'/>
        <div>
            <h1>{props.title} ⦁ {User.name}</h1>
            <div dangerouslySetInnerHTML={{ __html: props.content }}></div>
        </div>
    </div>
))