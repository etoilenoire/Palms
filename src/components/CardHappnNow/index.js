import React from 'react'
import { Card, CardTitle, CardText, CardImg, CardImgOverlay } from 'reactstrap'
import styles from './CardHappnNow.module.css'
import Button from '../Button'

const CardHappnNow = (props) => {
    return (
      <div className={styles.div}>
        <Card inverse>
          <CardImg width="25%" src="https://upload.wikimedia.org/wikipedia/en/c/c3/Yung_Lean_Starz_Cover.png" className={styles.Card} alt="Starz Cover" />
          <CardImgOverlay>
            <CardTitle tag="h5">STARZ</CardTitle>
            <CardText>Yung Lean</CardText>
            <Button className={styles.Button}>Join Live</Button>
          </CardImgOverlay>
        </Card>
      </div>
    );
  };

  export default CardHappnNow;