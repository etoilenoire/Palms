import React from 'react'
import {Link} from "react-router-dom"
import Banner from '../../components/Banner'
import CardArtist from '../../components/CardArtist'
import CardConcert from '../../components/CardConcert'
import Header from '../../components/Header'
// import Lien from '../../components/Lien'
import Menu from '../../components/Menu'
import Subtitle from '../../components/SubTitle'
import styles from './HomePage.module.css'

const HomePage = (props) => {
    return (
        <div>
         <Header>Home</Header>
            <div className={styles.box}>
                <Subtitle>Happening now.</Subtitle>
                    <div className={styles.carousel}>
                        <CardConcert className={styles.cardConcert}/>
                        <CardConcert className={styles.cardConcert}/>
                        <CardConcert className={styles.cardConcert}/>
                        <CardConcert className={styles.cardConcert}/>
                        <CardConcert className={styles.cardConcert}/>
                    </div>
                <Link className={styles.showAll} to="../HappenNowPage">Show All</Link>
            </div>

          <Banner />
            
            <div className={styles.box}>
                <Subtitle>Trends.</Subtitle>
                    <div className={styles.carousel}>
                        <CardArtist />
                        <CardArtist />
                        <CardArtist />
                        <CardArtist />
                        <CardArtist />

                    
                    </div>
                <Link className={styles.showAll} to="../TrendsNowPage">Show All</Link>
            </div>

         <Menu />

         
         
      </div>
     )
}

export default HomePage