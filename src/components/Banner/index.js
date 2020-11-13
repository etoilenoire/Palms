import React from 'react'
import styles from './Banner.module.css'

const UrlBanner = "https://cdn-www.konbini.com/fr/files/2013/06/Banniere.jpg"

const Banner = () => {
    return (
        <img src={UrlBanner} alt="" className={styles.banner} />
    )
}

export default Banner