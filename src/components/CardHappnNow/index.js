import React from 'react'
import { Card, CardTitle, CardText, CardImg, CardImgOverlay } from 'reactstrap'
import styles from './CardHappnNow.module.css'


const CardHappnNow = (props) => {
    return (
      <div className={styles.div}>
        <Card inverse>
          <CardImg width="25%" src="https://upload.wikimedia.org/wikipedia/en/c/c3/Yung_Lean_Starz_Cover.png" className={styles.Card} alt="Starz Cover" />
          <CardImgOverlay>
            <CardTitle tag="h5">STARZ</CardTitle>
            <CardText>Yung Lean</CardText>
            <button className={styles.Button}>Join Live 🔴</button>
          </CardImgOverlay>
        </Card>

        <Card inverse>
          <CardImg width="25%" src="https://linkstorage.linkfire.com/medialinks/images/5fd743fd-9c43-4ece-bde8-3416fbec8baf/artwork-440x440.jpg" className={styles.Card} />
          <CardImgOverlay>
            <CardTitle tag="h5">.</CardTitle>
            <CardText> .  </CardText>
            <button className={styles.Button}>Join Live 🔴</button>
          </CardImgOverlay>
        </Card>

        <Card inverse>
          <CardImg width="25%" src="https://i.pinimg.com/originals/52/56/58/5256583c0e5791b7266176e339653b60.jpg" className={styles.Card} alt="Starz Cover" />
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