import React from 'react'
import CardHappnNow from '../../components/CardHappnNow'
import Header from '../../components/Header'
import Subtitle from '../../components/SubTitle'



const HappenNowPage = (props) => {
    return (
        <div>
            <Header>Lives</Header>
            <Subtitle>NOW LIVE</Subtitle>
            <CardHappnNow />
            
        </div>
    )

}


export default HappenNowPage