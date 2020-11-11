import React from 'react'
import Banner from '../../components/Banner'
import CardArtist from '../../components/CardArtist'
import CardConcert from '../../components/CardConcert'
import Header from '../../components/Header'
import Lien from '../../components/Lien'
import Menu from '../../components/Menu'
import Subtitle from '../../components/SubTitle'

const HomePage = (props) => {
    return (
        <div>
         <Header>Home</Header>
            <div className="HappnNow">
                <Subtitle>Happening now.</Subtitle>
                <CardConcert />
                <Lien />
            </div>

         <Banner />

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