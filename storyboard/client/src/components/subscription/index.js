import React from 'react'
import { Input } from '../input'
import { Button } from '../button'
import styles from './index.module.sass'

export const Subscription = props => (
    <div className={styles.cont}>
        <Input placeholder='Add your email' inverted/>
        <Button title='Subscribe' inverted/>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere fuga dolorem quam consequuntur ratione sapiente minus pariatur dicta qui explicabo incidunt, rerum placeat ipsa provident eos, reiciendis modi. Eum, in?</p>
    </div>
)