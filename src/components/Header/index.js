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

export default Header