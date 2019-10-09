import styles from './index.module.sass'
import React from 'react'
import { Input } from '../../input'
import { Button } from '../../button'

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
        <Button title='Login'/>

        <p onClick={props.onPageChange}>
            Dont have an account? Register
        </p>
    </form>
)