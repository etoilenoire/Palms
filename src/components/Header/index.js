import React from 'react'
import ProfilePic from '../ProfilePic'
import Title from '../Title'
import styles from './Header.module.css'

const Header = () => {
    return (
        <div>
           <Title />
           <ProfilePic />
        </div>
    )
}

export default Header