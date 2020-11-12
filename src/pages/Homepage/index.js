import React from 'react'
import Banner from '../../components/Banner'
import CardArtist from '../../components/CardArtist'
import CardConcert from '../../components/CardConcert'
import Header from '../../components/Header'
import Lien from '../../components/Lien'
import Menu from '../../components/Menu'
import Subtitle from '../../components/SubTitle'
import styles from './HomePage.module.css'

const HomePage = (props) => {
    return (
        <div>
         <Header>Home</Header>
            <div className={styles.box}>
                <Subtitle>Happening now.</Subtitle>
                <CardConcert />
                <Lien />
            </div>

            <div classeName="Banner">
            <Subtitle>A l'affiche</Subtitle>
                <Banner />
            </div>
            
            <div className="TrendNow">
                <Subtitle>Trends.</Subtitle>
                <CardArtist />
                <Lien />
            </div>

         <Menu />

         
         
      </div>
     )
}

export default HomePage