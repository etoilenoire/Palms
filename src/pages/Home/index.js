import React from 'react'
import Menu from 'components/Menu'
// import { SpotifyContext } from 'components/SpotifyWrapper'
import styles from './Home.module.css'

const Home = () => {
  // const { deviceId, token } = useContext(SpotifyContext);
  return (
    <div className={styles.container}>
      <Menu />

      Page d'accueil tu connais oueoue
      On est là
      ouais la famille tu connais
      bite
    </div>
  )
}

export default Home
