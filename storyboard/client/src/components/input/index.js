import styles from './index.module.sass'
import React from 'react'

export const Input = props => (
    <input
        {...props}
        className={styles.input}
        type={props.type || 'text'}
    />
)