import React from 'react'
import SpotifyWebPlayer from 'react-spotify-web-playback/lib'
import SpotifyProvider from '../SpotifyProvider'


const spotifyClientId = "21a746d4e0d7492ea098ebdcce85c09e"
const spotifyRedirectUri = "http://localhost:3000/"

const Spotify = () => {
    return (
        <div>
        <SpotifyProvider
            clientId={spotifyClientId}
            spotifyRedirectUri={spotifyRedirectUri}>
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

            </SpotifyProvider>


</div>
    )
  }
  
  export default Spotify;