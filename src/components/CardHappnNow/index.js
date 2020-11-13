import React from 'react'
import { Card, CardTitle, CardText, CardImg, CardImgOverlay } from 'reactstrap'
import styles from './CardHappnNow.module.css'


const CardHappnNow = (props) => {
    return (
      <div className={styles.div}>
        <Card inverse>
          <CardImg width="25%" src="https://upload.wikimedia.org/wikipedia/en/c/c3/Yung_Lean_Starz_Cover.png" className={styles.cardConcert} alt="Starz Cover" />
          <CardImgOverlay>
            <CardTitle tag="h5">STARZ</CardTitle>
            <CardText>Yung Lean</CardText>
            <button className={styles.Button}>Join Live 🔴</button>
          </CardImgOverlay>
        </Card>

        <Card inverse>
          <CardImg width="25%" src="https://www.sortiraparis.com/images/1001/1665/604359-dua-lipa-presente-studio-2054-un-concert-virtuel-a-suivre-en-live-streaming.jpg" className={styles.cardConcert} />
          <CardImgOverlay>
            <CardTitle tag="h5">2054</CardTitle>
            <CardText>Dua Lipa</CardText>
            <button className={styles.Button}>Join Live 🔴</button>
          </CardImgOverlay>
        </Card>

        <Card inverse>
          <CardImg width="25%" src="https://i.pinimg.com/originals/52/56/58/5256583c0e5791b7266176e339653b60.jpg" className={styles.cardConcert} alt="Starz Cover" />
          <CardImgOverlay>
            <CardTitle tag="h5">Pretty Girl</CardTitle>
            <CardText>Clairo</CardText>
            <button className={styles.Button}>Join Live 🔴</button>
          </CardImgOverlay>
        </Card>
        
      </div>

      

      
    );
  };

  export default CardHappnNow;