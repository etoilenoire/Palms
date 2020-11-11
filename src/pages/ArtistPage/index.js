import React from 'react'
import CardArtist from '../../components/CardArtist'
import CardConcert from '../../components/CardConcert'
import CardTournee from '../../components/CardTournée'
import Header from '../../components/Header'
import Menu from '../../components/Menu'
import Subtitle from '../../components/SubTitle'


const ArtistPage = () => {
    return (
        <div>
        
        <Header />
        <CardArtist />
        <Subtitle>Sorties.</Subtitle>
            <div>
                <CardTournee />
                <CardTournee />
                <CardTournee />
                <CardTournee />
            </div>
        <Subtitle>Right Now.</Subtitle>
        <CardConcert />

        <Subtitle>Les fans aiment aussi</Subtitle>
            <div>
                <CardArtist />
                <CardArtist />
                <CardArtist />
                <CardArtist />
            </div>
        <Menu />

         
         
      </div>
     )
}

export default ArtistPage