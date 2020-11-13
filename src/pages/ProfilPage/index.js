import React from 'react'
import Header from '../../components/Header'
import Subtitle from '../../components/SubTitle'
import styles from './ProfilPage.module.css'
import Button from '../../components/Button'


const ProfilPage = () => {
    return (
        <div>

            <Header>Your profile</Header>
            <div>
                <Subtitle> My preferences </Subtitle>
                <Button>Notifications</Button>
                <Button>Qualité</Button>
                <Button>Account</Button>
            </div>

            <div>    
            <Subtitle> My tickets </Subtitle>
            <link to="./StreamPage" /> My tickets <link/>

            <br></br>

            <Button>PREMIUM GO</Button>
            <Button>Help?</Button>
            
            <br></br>
            <br></br>

            <Button classname={styles.centerSignOut}> Sign out </Button>
            </div>

        </div>
        
    )
}

export default ProfilPage