import React from 'react'
import NomArtist from '../NomArtist'
import NbFollowers from '../NbFollowers'
import {
    Card, CardImg, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';


const CardArtist = () => {
    return (
        <div>
            <Card style={{backgroundColor: "#3D3D3D"}}>
                <CardImg />
                    <CardBody>
                        <CardTitle tag="h5"> <NomArtist /> </CardTitle>
                        <CardSubtitle tag="h6" className="mb-2 text-muted"> <NbFollowers /> </CardSubtitle>
                        <Button>FOLLOW</Button>
                    </CardBody>
            </Card>
            
            
           {/* 
            <Photo/>
            <NomArtist/>
            <NbFollowers/>
            <Button/>

            */}

        </div>
    )
}

export default CardArtist