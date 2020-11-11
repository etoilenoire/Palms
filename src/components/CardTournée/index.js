import React from 'react'
import Photo from '../Photo'
import NomArtist from '../NomArtist'
import NomConcert from '../NomConcert'
import Add from '../Add+'



const CardTournee = () => {
    return (
        <div>
            <Photo/>
            <NomConcert/>
            <NomArtist/>
            <Add/>
        </div>
    )
}

export default CardTournee