import React from 'react'
import { observer } from 'mobx-react'
import { FaPen } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { FaTools } from 'react-icons/fa'
import styles from './index.module.sass'
import { setUser } from '../../../store'
import { pageNames } from '../constants'
import { FaSignOutAlt } from 'react-icons/fa'

export const MiniDash = observer(props => (
    <div className={styles.cont}>
        <div className={styles.avatar}>
            <img src='https://randomuser.me/api/portraits/men/32.jpg' alt='avatar'/>
            <p>Al Hafidiy</p>
        </div>
        <div className={styles.linkCont}>
            <Btn title='Editor' to='/editor' icon={<FaPen/>}/>
            <Btn title='Dashboard' to='/dashboard' icon={<FaTools/>}/>
            <Btn
                title='Logout'
                icon={<FaSignOutAlt/>}
                onClick={() => setUser({ token: '' })}
            />
        </div>
    </div>
))

const Btn = props => (
    <Link to={props.to} className={styles.li}>
        <div className={styles.link} onClick={props.onClick}>
            <div>{props.icon}</div>
            <p>{props.title}</p>
        </div>
    </Link>
)