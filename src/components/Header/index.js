import React from 'react'
import ProfilePic from '../ProfilePic'
import Title from '../Title'
import {Navbar} from 'reactstrap'

const Header = ({children}) => {
    return (
<<<<<<< HEAD
        <div className={styles.header}>
            <div className={styles.title}><Title>{children}</Title></div>
            <ProfilePic />
            <div className={styles.rectangle}/>
        </div>
=======

        <Navbar>
            <Title>{children}</Title>
            <ProfilePic />
        </Navbar>
>>>>>>> 2fc90be59d631809baa855de8c3e516ba98a59e1

    )
}

export default Header