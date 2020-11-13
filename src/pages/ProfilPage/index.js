import React from 'react'
import Header from '../../components/Header'
import Subtitle from '../../components/SubTitle'



const ProfilPage = () => {
    return (
        <div>

            <Header>Your profile</Header>
            <div>
                <Subtitle> My preferences </Subtitle>
                <button>Notifications</button>
                <button>Qualité</button>
                <button>Account</button>
            </div>

            <div>    
            <Subtitle> My tickets </Subtitle>
            <link to="./StreamPage" /> My tickets <link/>

            <br></br>

            <button>PREMIUM GO</button>
            <button>Help</button>
            
            <br></br>
            <br></br>

            <button>Sign out</button>
            </div>

        </div>
        
    )
}

export default ProfilPage