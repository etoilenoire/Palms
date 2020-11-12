import { BrowserRouter, Switch, Route } from "react-router-dom";
import LogIn from '../pages/LoginPage';
import Signup from '../pages/SignUpPage';
import Menu from '../components/Menu';
import ResearchPage from '../pages/ResearchPage';
import StreamPage from '../pages/StreamPage';
import LibraryPage from '../pages/LibraryPage';
import HappenNowPage from '../pages/HappenNowPage';
import HomePage from '../pages/HomePage';
<<<<<<< HEAD
import Player from "../components/player";
import Banner from "../components/Banner";
=======
import Player from '../components/player'
>>>>>>> e5a94837617c4d2f06aca3127db12af198c5dbdb




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
        </Switch>
        

        <Player />

      <Menu />

      
      </BrowserRouter>
    </div>
  );
}

export default App 