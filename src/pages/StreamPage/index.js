import React from 'react'
import styles from './StreamPage.module.css'
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
                    <div className={styles.oui}>
                        <CardConcert className={styles.cardConcert}/>
                        <CardArtist />
                    </div>

                    <div className={styles.oui}>
                        <CardConcert className={styles.cardConcert}/>
                        <CardArtist />
                    </div>

                    <div className={styles.oui}>
                        <CardConcert className={styles.cardConcert}/>
                        <CardArtist />
                    </div>

                    <div className={styles.oui}>
                        <CardConcert className={styles.cardConcert}/>
                        <CardArtist />
                    </div>

                    <div className={styles.oui}>
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