import React from 'react'
import { Card, CardTitle, CardText, CardImg, CardImgOverlay } from 'reactstrap'
import styles from './CardHappnNow.module.css'


const CardHappnNow = (props) => {
    return (
      <div className={styles.div}>
        <Card inverse>
          <CardImg width="25%" src="https://upload.wikimedia.org/wikipedia/en/c/c3/Yung_Lean_Starz_Cover.png" className={styles.cardConcert} alt="Starz Cover" />
          <CardImgOverlay>
            <CardTitle tag="h5" className={styles.black}>STARZ</CardTitle>
            <CardText className={styles.black}>Yung Lean</CardText>
            <button className={styles.Button}>Join Live 🔴</button>
          </CardImgOverlay>
        </Card>

        <Card inverse>
          <CardImg width="25%" src="https://cdn1.theyoungfolks.com/wp-content/uploads/2017/07/23141437/Flower-Boy-770x775.jpg" className={styles.Card} />
          <CardImgOverlay>
            <CardTitle tag="h5" className={styles.black}>Flower Boy</CardTitle>
            <CardText className={styles.black}>Tyler, the Creator</CardText>
            <button className={styles.Button}>Join Live 🔴</button>
          </CardImgOverlay>
        </Card>

        <Card inverse>
          <CardImg width="25%" src="https://i.pinimg.com/originals/52/56/58/5256583c0e5791b7266176e339653b60.jpg" className={styles.Card} alt="Starz Cover" />
          <CardImgOverlay>
            <CardTitle tag="h5" className={styles.black}>Pretty Girl</CardTitle>
            <CardText className={styles.black}>Clairo</CardText>
            <button className={styles.Button}>Join Live 🔴</button>
          </CardImgOverlay>
        </Card>
        
      </div>

      

      
    );
  };

  export default CardHappnNow;