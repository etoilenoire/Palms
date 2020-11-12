import React from 'react'
import styles from './ProfilePic.module.css'


const UrlImage = "https://i.pinimg.com/originals/27/3c/43/273c4341356729b7d4ad25e87d2beeb6.jpg"


const ProfilePic = () => {
    return (
        <a href='/ProfilePage'><img src={UrlImage} className={styles.img} alt=""/> </a>
    )
}

export default ProfilePic