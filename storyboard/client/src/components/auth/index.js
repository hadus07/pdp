import React from 'react'
import { Login } from './login'
import { User } from '../../store'
import { Register } from './register'
import { observer } from 'mobx-react'
import { MiniDash } from './mini-dash'
import { pageNames } from './constants'
import styles from './index.module.sass'

class AuthComponent extends React.PureComponent {

    timerID = null

    state = {
        animate: false,
        component: User.token
            ? pageNames.dashboard
            : pageNames.login,
    }

    handlePageChange = com => {
        clearInterval(this.timerID)
        this.setState({ component: com, animate: true })
        this.timerID = setTimeout(() => this.setState({animate: false}), 500)
    }

    renderComponent = () => {
        let component = User.token
            ? pageNames.dashboard
            : pageNames.login
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

export const Auth = observer(AuthComponent)