import React from 'react'
import Banner from '../../components/Banner'
import CardArtist from '../../components/CardArtist'
import CardConcert from '../../components/CardConcert'
import Lien from '../../components/Lien'
import Menu from '../../components/Menu'
import Subtitle from '../../components/SubTitle'
import Title from '../../components/Title'

const HomePage = () => {
    return (
        <div>
         <Title />
            <div className="HappnNow">
                <Subtitle />
                <CardConcert />
                <Lien />
            </div>

         <Banner />

            <div className="TrendNow">
                <Subtitle />
                <CardArtist />
                <Lien />
            </div>

         <Menu />

         
         
      </div>
     )
}

export default HomePage