import React from 'react'
import styles from './Photo.module.css'

const UrlImage = "https://m.media-amazon.com/images/I/618-qJOv2NL._SS500_.jpg"

const Photo = () => {
    return (
        <img src={UrlImage} alt="" className={styles.photo}/>
    )
}

export default Photo