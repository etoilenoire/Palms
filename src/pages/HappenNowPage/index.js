import React from 'react'
import CardHappnNow from '../../components/CardHappnNow'
import Header from '../../components/Header'
import Subtitle from '../../components/SubTitle'
import styles from './HappenNowPage.module.css'


const HappenNowPage = (props) => {
    return (
        <div className={styles.div}>
            <Header>Lives</Header>
            <Subtitle>NOW LIVE</Subtitle>
            <CardHappnNow />
            
        </div>
    )

}


export default HappenNowPage