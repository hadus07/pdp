import React from 'react'
import styles from './index.module.sass'

export const Button = props => (
    <button
        {...props}
        className={styles.btn}
    >
        {props.title}
    </button>
)