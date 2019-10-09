import styles from './index.module.sass'
import React from 'react'
import { Input } from '../../input'
import { Button } from '../../button'

export const Register = props => (
    <form className={styles.register}>
        <h2>register</h2>
        <Input
            placeholder='Email'    
        />
        <Input
            placeholder='Password'
            type='password'    
        />
        <Input
            placeholder='Confirm Password'
            type='password'    
        />
        <Button title='Register'/>

        <p onClick={props.onPageChange}>
            Already have an account? Log in
        </p>
    </form>
)