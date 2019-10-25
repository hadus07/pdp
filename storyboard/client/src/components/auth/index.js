import React from 'react'
import { Login } from './login'
import { Register } from './register'
import { MiniDash } from './mini-dash'
import { pageNames } from './constants'
import styles from './index.module.sass'

export class Auth extends React.PureComponent {

    timerID = null

    state = { component: pageNames.dashboard, animate: false }

    handlePageChange = com => {
        clearInterval(this.timerID)
        this.setState({ component: com, animate: true })
        this.timerID = setTimeout(() => this.setState({animate: false}), 500)
    }

    renderComponent = () => {
        const { component } = this.state
        const { dashboard, login, register } = pageNames

        if(component === login)
            return <Login onPageChange={this.handlePageChange} /> 
        else if(component === register)
            return <Register onPageChange={this.handlePageChange} />
        else if(component === dashboard)
            return <MiniDash onPageChange={this.handlePageChange}/>
    }

    render() {
        return (
            <div
                className={`${styles.auth} ${this.state.animate ? styles.animated : ''}`}
            >
                {this.renderComponent()}
            </div>
        )
    }
}