import React from 'react'
import { User } from '../../store'
import { observer } from 'mobx-react'
import styles from './index.module.sass'

const mockImage = 'https://marketplace.canva.com/MADSMNPt8uA/3/0/thumbnail_large/canva-green-beach-photo-book-cover-MADSMNPt8uA.jpg'

export const SingleStory = observer(props => (
    <div className={styles.list}>
        <img src={mockImage} alt='Book cover'/>
        <div>
            <h1>{props.title} ⦁ {User.name}</h1>
            <div dangerouslySetInnerHTML={{ __html: props.content }}></div>
        </div>
    </div>
))