import { BrowserRouter, Switch, Route } from "react-router-dom";
import LogIn from '../pages/LoginPage';
import Signup from '../pages/SignUpPage';
import Menu from '../components/Menu';
import ResearchPage from '../pages/ResearchPage';
import StreamPage from '../pages/StreamPage';
import LibraryPage from '../pages/LibraryPage';
import HappenNowPage from '../pages/HappenNowPage';
import HomePage from '../pages/Homepage';
import Player from '../components/Player';
import ProfilPage from '../pages/ProfilPage';
import Spotify from "../components/Spotify";
//import SpotifyProvider from "../components/SpotifyProvider";
//import SpotifyWebPlayer from "react-spotify-web-playback/lib";


function App() {
  console.log('test')
  return (
    <div>
      <BrowserRouter>

        <Switch>
          <Route path="/homepage" component={HomePage} />
          <Route path="/StreamPage" component={StreamPage} />
          <Route path="/ResearchPage" component={ResearchPage} />
          <Route path="/LibraryPage" component={LibraryPage} />
          <Route path="/SignUpPage" component={Signup} />
          <Route path="/LoginPage" component={LogIn} />       
          <Route path="/HappenNowPage" component={HappenNowPage} />
          <Route path="/profilpage" component={ProfilPage} />
          <Route path="/Spotify" component={Spotify} />
          

        </Switch>
        
        
        
       

        <Player />
        
        
      <Menu />

      
      </BrowserRouter>
    </div>
  );
}


export default App;