import { BrowserRouter, Switch, Route } from "react-router-dom";
import LogIn from '../pages/LoginPage';
import Signup from '../pages/SignUpPage';
import Menu from '../components/Menu';
import ResearchPage from '../pages/ResearchPage';
import StreamPage from '../pages/StreamPage';
import LibraryPage from '../pages/LibraryPage';
<<<<<<< HEAD
import HappenNowPage from "../pages/HappenNowPage";
=======
import HomePage from '../pages/HomePage';
>>>>>>> 172a5a32a2318b61f7cbd38d3868a0722c885100




function App() {
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
        
      
      <Menu />

      
      </BrowserRouter>
    </div>
  );
}

export default App 