import React from 'react'
import styles from './index.module.sass'

export const Button = props => (
    <button
        {...props}
        className={`
            ${props.full && styles.full} 
            ${props.inverted ? styles.btnInverted : styles.btn}
        `}
    >
        {props.title}
    </button>
)