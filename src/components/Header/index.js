import React from 'react'
import ProfilePic from '../ProfilePic'
import Title from '../Title'
import {Navbar} from 'reactstrap'

const Header = ({children}) => {
    return (

        <Navbar>
            <Title>{children}</Title>
            <ProfilePic />
        </Navbar>

    )
}

/* <div className={styles.header}>
            <div className={styles.title}><Title>{children}</Title></div>
            <ProfilePic />
            <div className={styles.rectangle}/>
        </div> */

export default Header