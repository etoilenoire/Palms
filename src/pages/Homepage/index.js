import React from 'react'
import {Link} from "react-router-dom";
import Banner from '../../components/Banner'
import CardConcert from '../../components/CardConcert';
// import CardArtist from '../../components/CardArtist';
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
                        <CardConcert />
                        <CardConcert />
                        <CardConcert />
                        <CardConcert />
                        <CardConcert />
                        <CardConcert />
                    </div>
                <Link to="../HappenNowPage">Show All</Link>
            </div>

          <Banner />
            
            <div className="TrendNow">
                <Subtitle>Trends.</Subtitle>
                {/* <CardArtist /> */}
                <Link to="../TrendsNowPage">Show All</Link>
            </div>

         <Menu />

         
         
      </div>
     )
}

export default HomePage