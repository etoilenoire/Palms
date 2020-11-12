import React from 'react'
import { Card, CardTitle, CardText, CardImg, CardImgOverlay } from 'reactstrap'

const CardHappnNow = (props) => {
    return (
      <div>
        <Card inverse>
          <CardImg width="25%" src="https://upload.wikimedia.org/wikipedia/en/c/c3/Yung_Lean_Starz_Cover.png" alt="Starz Cover" />
          <CardImgOverlay>
            <CardTitle tag="h5">STARZ</CardTitle>
            <CardText>Yung Lean</CardText>
          </CardImgOverlay>
        </Card>
      </div>
    );
  };

  export default CardHappnNow;