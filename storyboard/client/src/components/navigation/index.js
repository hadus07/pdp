import styles from './index.module.sass'
import React from 'react'
import { navigation } from '../../constants'

export const Navigation = props => (
    <div className={styles.navigation}>
        <nav className={styles.nav}>
            {navigation.map(item => (
                <a
                    key={item.link}
                    className={styles.navItem}
                    href={`#${item.link}`}
                >
                    {item.name}
                </a>
            ))}
        </nav>
    </div>
)