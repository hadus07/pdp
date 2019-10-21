import styles from './index.module.sass'
import React from 'react'
import { Auth } from '../auth'
import { navigation } from '../../constants'

export const Header = () => (
    <div className={styles.header} id={navigation[0].link}>
        <div className={styles.background}/>
        <Auth />
    </div>
)