import React from 'react'
import styles from './LibraryPage.module.css'
import Button from '../../components/Button'
import Header from '../../components/Header'
import Menu from '../../components/Menu'



const LibraryPage = () => {
    return (
        <div>
          <Header>Bibliothèque.</Header>
            <div>
                <Button className={styles.libraryButton}>Playlist.</Button>
                <Button className={styles.libraryButton}>Artists.</Button>
            </div>
          <Menu />
        </div>
    )
} 


export default LibraryPage