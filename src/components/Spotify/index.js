import React from 'react'
import SpotifyWebPlayer from 'react-spotify-web-playback/lib';
//import SpotifyWebPlayer from 'react-spotify-web-playback/lib'
import SpotifyProvider from '../SpotifyProvider'
import Title from '../Title';


const spotifyClientId = process.env.REACT_APP_SPOTIFY_CLIENT_ID
const spotifyRedirectUri = process.env.REACT_APP_SPOTIFY_REDIRECT_URI

const Spotify = () => {
    return (
        <div>
          <Title>Spotify</Title>
        <SpotifyProvider
            clientId= {spotifyClientId}
            spotifyRedirectUri= {spotifyRedirectUri}>
        
        </SpotifyProvider>

        <SpotifyWebPlayer styles={{
    bgColor: '#333',
    color: '#fff',
    loaderColor: '#fff',
    sliderColor: '#1cb954',
    savedColor: '#fff',
    trackArtistColor: '#ccc',
    trackNameColor: '#fff',
  }}/>


</div>
    )
  }
  
  export default Spotify;