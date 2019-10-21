import React from 'react'
import styles from './index.module.sass'

export const Footer = props => (
    <div className={styles.cont}>
        <div className={styles.content}>
            <h1>Sb</h1>
            <div>
                <h2>About</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde maxime fugiat vero non qui officia debitis, modi velit fuga eligendi.</p>
            </div>
            <div>
                <h2>Contact</h2>
                <p>⦁ +998 00 000 00 00</p>
                <p>⦁ example_email@email.com</p>
                <p>⦁ Nimadir ko'chasi, 42 - uy</p>
            </div>
        </div>
        <div className={styles.copyright}>
            Copyright © {new Date('2014.01.01').getFullYear()} - {new Date().getFullYear()}
        </div>
    </div>
)