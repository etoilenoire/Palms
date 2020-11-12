import React from 'react'
import ReactAudioPlayer from "react-audio-player";
import probably from '../../assets/Tracks/probably.mp3'
import styles from './Player.module.css'

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