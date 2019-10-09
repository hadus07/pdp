import styles from './index.module.sass'
import React from 'react'
import { navigation } from '../../constants'

const scroll = index => {
    window.scrollTo({
        left: 0,
        behavior: 'smooth',
        top: index * window.innerHeight,
    })
}

export const Navigation = props => (
    <div className={styles.navigation}>
        <nav className={styles.nav}>
            {navigation.map((item, index) => (
                <span
                    key={item.link}
                    className={styles.navItem}
                    onClick={() => scroll(index)}                    
                >
                    {item.name}
                </span>
            ))}
        </nav>
    </div>
)