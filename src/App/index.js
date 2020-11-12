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
=======
import Banner from "../components/Banner";

>>>>>>> 25b8a1337472e236e96e231e2ef8a69cdf62c570



function App() {
  console.log('test')
  return (
    <div>
      <BrowserRouter>

        <Switch>
          <Route path="/HomePage" component={HomePage} />
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