import React from 'react'
import Button from '../../components/Button'
import Header from '../../components/Header'
import Menu from '../../components/Menu'



const LibraryPage = () => {
    return (
        <div>
          <Header>Bibliothèque.</Header>
            <div>
                <Button>Playlist.</Button>
                <Button>Artists.</Button>

                
            </div>
          <Menu />
        </div>
    )
} 


export default LibraryPage