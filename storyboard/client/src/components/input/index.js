import styles from './index.module.sass'
import React from 'react'

export const Input = props => (
    <input
        {...props}
        type={props.type || 'text'}
        className={props.inverted ? styles.inputInverted : styles.input}
    />
)