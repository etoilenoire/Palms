import React from 'react'
import styles from '../Homepage/HomePage.module.css'
import Header from '../../components/Header'
import Menu from '../../components/Menu'
import CardArtist from '../../components/CardArtist'
import CardConcert from '../../components/CardConcert'



const StreamPage = () => {
    return (
        <div>
            <Header>Stream.</Header>
            <div >
                <div >
                    <div>
                        <CardConcert className={styles.cardConcert}/>
                        <CardArtist />
                    </div>

                    <div>
                        <CardConcert className={styles.cardConcert}/>
                        <CardArtist />
                    </div>

                    <div>
                        <CardConcert className={styles.cardConcert}/>
                        <CardArtist />
                    </div>

                    <div>
                        <CardConcert className={styles.cardConcert}/>
                        <CardArtist />
                    </div>

                    <div>
                        <CardConcert className={styles.cardConcert}/>
                        <CardArtist />
                    </div>
                </div>
            </div>
            <Menu />
        </div>
    )
} 


export default StreamPage