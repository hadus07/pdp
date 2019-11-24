import React from 'react'
import { Api } from '../../../api'
import { Input } from '../../input'
import { Button } from '../../button'
import { observer } from 'mobx-react'
import { setUser } from '../../../store'
import { pageNames } from '../constants'
import styles from './index.module.sass'

export const Register = observer(class Register extends React.Component {

    state = {
        email: '',
        password: '',
        rePassword: '',
    }

    handleChange = ({ target }) => this.setState({ [target.name]: target.value })

    handleSubmit = e => {
        e.preventDefault()
        const { email, password, rePassword } = this.state

        if (password !== rePassword) {
            alert('Passwords do not match')
        } else {
            Api('registration', { email, password }, 'post')
            .then(res => {
                if (res.error) {
                    console.log(res.error)
                } else {
                    console.log(res)
                    setUser(res)
                }
            })
        }

    }

    render = () => {
        const { email, password, rePassword } = this.state

        return (
            <form className={styles.register}>
                <h2>register</h2>
                <Input
                    name='email'
                    type='email'
                    value={email}
                    placeholder='Email'    
                    onChange={this.handleChange}
                />
                <Input
                    type='password'    
                    name='password'
                    value={password}
                    placeholder='Password'
                    onChange={this.handleChange}
                />
                <Input
                    type='password'
                    name='rePassword'
                    value={rePassword}
                    onChange={this.handleChange}
                    placeholder='Confirm Password'
                />
                <Button title='Register' full onClick={this.handleSubmit}/>

                <p onClick={() => this.props.onPageChange(pageNames.login)}>
                    Already have an account? Log in
                </p>
            </form>
        )
    }
})