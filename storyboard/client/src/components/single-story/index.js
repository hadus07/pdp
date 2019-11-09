import React from 'react'
import styles from './index.module.sass'

const mockImage = 'https://marketplace.canva.com/MADSMNPt8uA/3/0/thumbnail_large/canva-green-beach-photo-book-cover-MADSMNPt8uA.jpg'

export const SingleStory = props => (
    <div className={styles.list}>
        <img src={mockImage} alt='Book cover'/>
        <div>
            <h1>Alibobo ⦁ Hafidiy ⦁ {props.title && props.title + 1}</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus consequatur magni doloribus saepe, reprehenderit reiciendis sed. Dolor quas earum modi!</p>
        </div>
    </div>
)