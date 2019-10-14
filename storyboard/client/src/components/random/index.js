import React from 'react'
import { Button } from '../button'
import styles from './index.module.sass'
import { navigation } from '../../constants'

const mockImage = 'https://marketplace.canva.com/MADSMNPt8uA/3/0/thumbnail_large/canva-green-beach-photo-book-cover-MADSMNPt8uA.jpg'
const lorem = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo nesciunt iusto quod rem harum? Tempora velit harum inventore quaerat iste ullam omnis aliquid error doloribus. Alias corrupti error quasi aliquid vitae natus accusamus ad animi odit nam, unde nemo aliquam voluptatibus? Nulla laborum adipisci ex quas a repellendus voluptate ratione optio! Non, repellendus. Quos cum quaerat accusamus quis placeat labore eos sint atque sit delectus sequi, suscipit id fuga doloribus ullam voluptate eum nisi ratione repellat! Ex quibusdam veniam, excepturi corrupti ducimus laborum voluptatibus rem eligendi repudiandae libero impedit eos consequuntur amet animi doloribus voluptate laudantium optio. Magni, ratione tempore!'

export const Random = props => (
    <div className={styles.cont} id={navigation[1].link}>
        <div className={styles.box}>
            <div className={styles.storyCont}>
                <img
                    src={mockImage}
                    alt='Book cover'
                    className={styles.image}
                />
                <div>
                    <h1>Alibobo</h1>                    
                    <h3>October 9, 2019</h3>
                    <p>{lorem}</p>
                    <h2>Al Hafidiy</h2>
                </div>
            </div>
            <Button title='Read more' inverted/>
        </div>
    </div>
)