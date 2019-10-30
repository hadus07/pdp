import React from 'react'
import { FaPen } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { FaTools } from 'react-icons/fa'
import styles from './index.module.sass'
import { pageNames } from '../constants'
import { FaSignOutAlt } from 'react-icons/fa'

export const MiniDash = props => (
    <div className={styles.cont}>
        <div className={styles.avatar}>
            <img src='https://randomuser.me/api/portraits/men/32.jpg' alt='avatar'/>
            <p>Al Hafidiy</p>
        </div>
        <div className={styles.linkCont}>
            <Btn title='Editor' to='/editor' icon={<FaPen/>}/>
            <Btn title='Dashboard' icon={<FaTools/>}/>
            <Btn
                title='Logout'
                icon={<FaSignOutAlt/>}
                onClick={() => props.onPageChange(pageNames.login)}
            />
        </div>
    </div>
)

const Btn = props => (
    <Link to={props.to} className={styles.li}>
        <div className={styles.link} onClick={props.onClick}>
            <div>{props.icon}</div>
            <p>{props.title}</p>
        </div>
    </Link>
)