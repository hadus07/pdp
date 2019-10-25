import styles from './index.module.sass'
import React from 'react'
import { navigation } from '../../constants'

export const Navigation = props => (
    <div className={styles.navigation}>
        <label htmlFor='checkbox'>☰</label>
        <input type='checkbox' id='checkbox'/>
        <nav className={styles.nav}>
            {navigation.map((item, index) => (
                <span
                    key={item.link}
                    className={styles.navItem}
                    onClick={() => props.scrollTo(index)}                    
                >
                    {item.name}
                </span>
            ))}
        </nav>
    </div>
)