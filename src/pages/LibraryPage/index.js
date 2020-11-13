import React from 'react'
import styles from './LibraryPage.module.css'
import Header from '../../components/Header'
import Menu from '../../components/Menu'
import { ListGroup, ListGroupItem } from 'reactstrap';



const LibraryPage = () => {
    return (
        <div>
          <Header>Bibliothèque.</Header>
            <div>
                <button className={styles.libraryButton} >Playlist.</button>
                <button className={styles.libraryButton}>Artists.</button>

                <ListGroup>
                  <ListGroupItem className={styles.libraryList} tag="a" href='../../Tracks/probaly.mp3' action>probably</ListGroupItem>
                  <ListGroupItem className={styles.libraryList} tag="a" href='../../Tracks/far-gone.mp3' action>far gone</ListGroupItem>
                  <ListGroupItem className={styles.libraryList} tag="a" action>3</ListGroupItem>
                  <ListGroupItem className={styles.libraryList} tag="a" action>4</ListGroupItem>
                  <ListGroupItem className={styles.libraryList} tag="a" action>5</ListGroupItem>
                </ListGroup>

                
            </div>
          <Menu />
        </div>
    )
} 


export default LibraryPage