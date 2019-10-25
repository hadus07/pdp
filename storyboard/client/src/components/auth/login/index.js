import React from 'react'
import { Input } from '../../input'
import { Button } from '../../button'
import styles from './index.module.sass'
import { pageNames } from '../constants'

export const Login = props => (
    <form className={styles.login}>
        <h2>login</h2>
        <Input
            placeholder='Email'    
        />
        <Input
            placeholder='Password'
            type='password'    
        />
        <Button title='Login' full/>

        <p onClick={() => props.onPageChange(pageNames.register)}>
            Dont have an account? Register
        </p>
    </form>
)