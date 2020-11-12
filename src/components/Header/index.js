import React from 'react'
import ProfilePic from '../ProfilePic'
import Title from '../Title'
import styles from './Header.module.css'

const Header = ({children}) => {
    return (
        <div class={styles.rectangle}>
           <Title>{children}</Title>
           <ProfilePic />
        </div>

    )
}

export default Header