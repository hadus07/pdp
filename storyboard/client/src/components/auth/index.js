import styles from './index.module.sass'
import React from 'react'
import { Login } from './login'
import { Register } from './register'

export class Auth extends React.PureComponent {

    state = { login: true, animate: false }

    handlePageChange = () => {
        this.setState({ login: !this.state.login, animate: true })
    }

    render() {
        return (
            <div
                className={`${styles.auth} ${this.state.animate ? styles.animated : ''}`}
            >
                {this.state.login 
                    ? (
                        <Login onPageChange={this.handlePageChange} /> 
                    )
                    : (
                        <Register onPageChange={this.handlePageChange} />
                    )
                }
            </div>
        )
    }
}