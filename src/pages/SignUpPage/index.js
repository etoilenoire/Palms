import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../../components/Button'
import Input from '../../components/Input'
import Lien from '../../components/Lien'
import Title from '../../components/Title'

const SignIn = () => {
    return (
        <div>
         <Title/>
            <form>
                Email
                <Input type="email" />
                <br />
                <br />
                Full Name
                <Input type="text" />
                <br />
                <br />
                Password
                <Input type="password"/>
                <br />
                Confirm Password
                <Input type="password"/>
                <br />
                <Link to= "/HomePage"><Button/></Link>
            </form>
            <br />
         <Lien/>
        </div>
    )
}

export default SignIn