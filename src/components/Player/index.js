import React from 'react'
import ReactAudioPlayer from "react-audio-player";
import styles from './Player.module.css'

import probaly from '../../assets/Tracks/probably.mp3'
//import { ListGroupItem } from 'reactstrap';

const Player = () => {
    return (
        <div>
            <ReactAudioPlayer 
            src={probaly}
            autoPlay
            controls
            className={styles.player}/>  
  

        </div>
    )
}

export default Player