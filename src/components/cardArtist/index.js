import React from 'react'
import Button from '../Button'
import Photo from '../Photo'
import NomArtist from '../NomArtist'
import NbFollowers from '../NbFollowers'



const CardArtist = () => {
    return (
        <div>
            <Photo/>
            <NomArtist/>
            <NbFollowers/>
            <Button/>
        </div>
    )
}

export default CardArtist