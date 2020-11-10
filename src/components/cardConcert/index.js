import React from 'react'
import Photo from '../Photo'
import NomArtist from '../NomArtist'
import NomConcert from '../NomConcert'
import Add from '../Add+'



const CardConcert = () => {
    return (
        <div>
            <Photo/>
            <NomConcert/>
            <NomArtist/>
            <Add/>
        </div>
    )
}

export default CardConcert