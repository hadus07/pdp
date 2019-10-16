import React from 'react'
import styles from './index.module.sass'
import { categories } from '../../constants'

export const Categories = props => (
    <div className={styles.cont}>
        <div className={styles.background}/>
        <div className={styles.categCont}>
            {categories.map(categ => (
                <div className={styles.categ} key={categ}>{categ}</div>
            ))}
        </div>
    </div>
)