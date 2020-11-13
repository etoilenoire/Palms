import React from 'react'
// import NomConcert from '../NomConcert'
// import Add from '../Add+'
// import {
//     CardDeck, Card, CardImg, CardBody,
//     CardTitle, CardSubtitle, Button
//   } from 'reactstrap';
import styles from './CardConcert.module.css'
//import NomArtist from '../NomArtist';
import Photo from '../Photo';
import Subtitle from '../SubTitle';



const CardConcert = () => {
    return (
        <div>
            {/* <CardDeck >
                <Card style={{backgroundColor: "#3D3D3D"}}>
                    <CardImg/>
                        <CardBody className={styles.cardbodycenter}>
                            <CardTitle tag="h3"><NomConcert/></CardTitle>
                            <Photo className={{width: 10}}/>
                            <Subtitle>Yung Lean</Subtitle>
                            <CardSubtitle tag="h3" className="mb-2 text-muted"> <NomArtist /> </CardSubtitle>
                            <Button>Join now</Button>
                            <Add/>
                        </CardBody>
                </Card>


            </CardDeck> */}

            <div class={styles.cardd}>
                <Photo className={styles.card}/>
                    <div className={styles.container}>
                        <Subtitle className={styles.cardConcert}>Yung Lean.</Subtitle>
                        <p style={{color: "white"}}>Kyoto</p>
                    </div>
            </div>
        
        </div>
    )
}

export default CardConcert