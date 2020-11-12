import React from 'react'
import ProfilePic from '../ProfilePic'
import Title from '../Title'
import styles from './Header.module.css'

const Header = ({children}) => {
    return (
        <div className={styles.header}>
            <div className={styles.title}><Title>{children}</Title></div>
            <ProfilePic />
            <div className={styles.rectangle}/>
        </div>

    )
}

export default Header