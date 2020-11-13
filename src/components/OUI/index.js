import React from 'react'
import ReactAudioPlayer from "react-audio-player";
import styles from './Player.module.css'
import probably from '../../assets/Tracks/probably.mp3'

const Player = () => {
    return (
        <div>
            <ReactAudioPlayer 
            src={probably}
            autoPlay
            controls
            className={styles.player}/>  
  

        </div>
    )
}

export default Player