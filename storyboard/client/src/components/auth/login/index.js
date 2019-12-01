import React from 'react'
import { Api } from '../../../api'
import { Input } from '../../input'
import { Button } from '../../button'
import styles from './index.module.sass'
import { pageNames } from '../constants'
import { setUser } from '../../../store'

export class Login extends React.PureComponent {
    state = {
        email: '',
        password: '',
    }

    handleChange = ({ target }) => this.setState({ [target.name]: target.value })

    handleSubmit = async e => {
        e.preventDefault()
        const { email, password } = this.state

        try {
            let res = await Api('login', { email, password }, 'post')
            setUser(res)
            this.props.onPageChange(pageNames.dashboard)
        } catch(err) {
            console.log(err)
        }

    }

    render = () => {
        const { email, password } = this.state
        return (
            <form className={styles.login}>
                <h2>login</h2>
                <Input
                    name='email'
                    value={email}
                    placeholder='Email'  
                    onChange={this.handleChange}
                />
                <Input
                    name='password'
                    type='password'
                    value={password}
                    placeholder='Password'
                    onChange={this.handleChange}
                />
                <Button title='Login' full onClick={this.handleSubmit}/>

                <p onClick={() => this.props.onPageChange(pageNames.register)}>
                    Dont have an account? Register
                </p>
            </form>
        )
    }
}