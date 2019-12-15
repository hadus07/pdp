import React from 'react'
import { observer } from 'mobx-react'
import { FaPen } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { FaTools } from 'react-icons/fa'
import styles from './index.module.sass'
import { pageNames } from '../constants'
import { setToken } from '../../../helpers'
import { FaSignOutAlt } from 'react-icons/fa'
import { User, setUser } from '../../../store/users'

export const MiniDash = observer(class MiniDash extends React.Component {
    
    componentDidMount = async () => {
        await setUser()
    }

    handleLogout = () => {
        setToken()
        this.props.onPageChange(pageNames.login)
    }

    render() {
        return User.loading ? <p>Loading...</p> : (
            <div className={styles.cont}>
                <div className={styles.avatar}>
                    <img src={User.avatar} alt='avatar'/>
                    <p>{User.name}</p>
                </div>
                <div className={styles.linkCont}>
                    <Btn title='Editor' to='/editor' icon={<FaPen/>}/>
                    <Btn title='Dashboard' to='/dashboard' icon={<FaTools/>}/>
                    <Btn
                        title='Logout'
                        icon={<FaSignOutAlt/>}
                        onClick={this.handleLogout}
                    />
                </div>
            </div>
        )
    }
}) 

const Btn = props => (
    <Link to={props.to} className={styles.li}>
        <div className={styles.link} onClick={props.onClick}>
            <div>{props.icon}</div>
            <p>{props.title}</p>
        </div>
    </Link>
)