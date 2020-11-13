import React from 'react'
import SpotifyWebPlayer from 'react-spotify-web-playback/lib';
//import SpotifyWebPlayer from 'react-spotify-web-playback/lib'
import SpotifyProvider from '../SpotifyProvider'
import Title from '../Title';
import Tracks from './Tracks';


const spotifyClientId = process.env.REACT_APP_SPOTIFY_CLIENT_ID
const spotifyRedirectUri = process.env.REACT_APP_SPOTIFY_REDIRECT_URI

const Spotify = () => {
    return (
        <div>
          <Title>Spotify</Title>
        <SpotifyProvider
            clientId= {spotifyClientId}
            spotifyRedirectUri= {spotifyRedirectUri}>
        
        <Tracks />
        </SpotifyProvider>

        <SpotifyWebPlayer styles={{
    bgColor: '#333',
    color: '#fff',
    loaderColor: '#fff',
    sliderColor: '#1cb954',
    savedColor: '#fff',
    trackArtistColor: '#ccc',
    trackNameColor: '#fff',
  }} token="BQAzxZfj0eE8s8r5w0x-3C8uRaMYkrD3zRBsDEC64F2Hb7PDngvldOZcHGTPGsF2Y-nQGVmlzFdbPWT3DtDZR1VQ8En7YQ6fE01c9_rWejPasANE9t9uz3Yz2_ckFpPfD3eeoUJVyUpD67iroEWzUQaNRLFD97TNTJcod1AiprinJ49xk5U"
uris={['spotify:track:6rqhFgbbKwnb9MLmUQDhG6']}/>


</div>
    )
  }
  
  export default Spotify;