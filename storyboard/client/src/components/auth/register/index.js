import React from 'react'
import { Input } from '../../input'
import { Button } from '../../button'
import { pageNames } from '../constants'
import styles from './index.module.sass'

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
        <Button title='Register' full/>

        <p onClick={() => props.onPageChange(pageNames.login)}>
            Already have an account? Log in
        </p>
    </form>
)