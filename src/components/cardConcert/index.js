import React from 'react'
//import Photo from '../Photo'
import NomArtist from '../NomArtist'
import NomConcert from '../NomConcert'
import Add from '../Add+'
import {
    CardDeck, Card, CardImg, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';
  import styles from './CardConcert.module.css'


const CardConcert = () => {
    return (
        <div>
            <CardDeck className={styles.carddeckcenter}>
                <Card style={{backgroundColor: "#3D3D3D"}}>
                    <CardImg/>
                        <CardBody className={styles.cardbodycenter}>
                            <CardTitle tag="h5"><NomConcert /></CardTitle>
                            <CardSubtitle tag="h6" className="mb-2 text-muted"> performed by <NomArtist /> </CardSubtitle>
                            <Button>Join now</Button>
                            <Add/>
                        </CardBody>
                </Card>
                <Card style={{backgroundColor: "#3D3D3D"}}>
                    <CardImg/>
                        <CardBody className={styles.cardbodycenter}>
                            <CardTitle tag="h5"><NomConcert /></CardTitle>
                            <CardSubtitle tag="h6" className="mb-2 text-muted"> performed by <NomArtist /> </CardSubtitle>
                            <Button>Join now</Button>
                            <Add/>
                        </CardBody>
                </Card>
                <Card style={{backgroundColor: "#3D3D3D"}}>
                    <CardImg/>
                        <CardBody className={styles.cardbodycenter}>
                            <CardTitle tag="h5"><NomConcert /></CardTitle>
                            <CardSubtitle tag="h6" className="mb-2 text-muted"> performed by <NomArtist /> </CardSubtitle>
                            <Button>Join now</Button>
                            <Add/>
                        </CardBody>
                </Card>
                <Card style={{backgroundColor: "#3D3D3D"}}>
                    <CardImg/>
                        <CardBody className={styles.cardbodycenter}>
                            <CardTitle tag="h5"><NomConcert /></CardTitle>
                            <CardSubtitle tag="h6" className="mb-2 text-muted"> performed by <NomArtist /> </CardSubtitle>
                            <Button>Join now</Button>
                            <Add/>
                        </CardBody>
                </Card>
                <Card style={{backgroundColor: "#3D3D3D"}}>
                    <CardImg/>
                        <CardBody className={styles.cardbodycenter}>
                            <CardTitle tag="h5"><NomConcert /></CardTitle>
                            <CardSubtitle tag="h6" className="mb-2 text-muted"> performed by <NomArtist /> </CardSubtitle>
                            <Button>Join now</Button>
                            <Add/>
                        </CardBody>
                </Card>
                
                
            


      </CardDeck>
        
        </div>
    )
}

export default CardConcert