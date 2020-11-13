import React from 'react'
import styles from './LibraryPage.module.css'
import Button from '../../components/Button'
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
                  <ListGroupItem tag="a" href='../../Tracks/probaly.mp3' action>probably</ListGroupItem>
                  <ListGroupItem tag="a" href='../../Tracks/far-gone.mp3' action>far gone</ListGroupItem>
                  <ListGroupItem tag="a" action>3</ListGroupItem>
                  <ListGroupItem tag="a" action>4</ListGroupItem>
                  <ListGroupItem tag="a" action>5</ListGroupItem>
                </ListGroup>

                
            </div>
          <Menu />
        </div>
    )
} 


export default LibraryPage