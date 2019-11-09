import React from 'react'
import styles from './index.module.sass'
import Button from '@material-ui/core/Button'

const avatar = 'https://randomuser.me/api/portraits/men/32.jpg'
const mockImage = 'https://marketplace.canva.com/MADSMNPt8uA/3/0/thumbnail_large/canva-green-beach-photo-book-cover-MADSMNPt8uA.jpg'

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
                {[1, 2, 3, 4, 5, 6].map(item => (
                    <Story onClick={handleDelete}/>
                ))}
            </div>
        </div>
    )
}

const Story = props => (
    <div className={styles.storyCont}>
        <img src={mockImage} alt='Story'/>
        <h1>Alibobo</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat incidunt magni itaque debitis. Officiis modi natus voluptatem optio, magni fugiat id quod sint odio nisi rem reiciendis, vitae totam ea.</p>
        <Button
            size="small"
            color="secondary"
            variant='outlined'
            onClick={props.onClick}
            className={styles.btn}
        >
            Delete
        </Button>
    </div>
)