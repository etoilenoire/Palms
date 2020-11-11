import styles from './App.module.css'
import { Link } from 'react-router-dom'
import { BrowserRouter, Switch, Route } from "react-router-dom";
import LogIn from '../pages/LoginPage';
import Signup from '../pages/SignUpPage';
import ArtistPage from '../pages/ArtistPage';
import Header from '../components/Header';
import HomePage from '../pages/HomePage';
import Menu from '../components/Menu';
import ResearchPage from '../pages/ResearchPage';




function App() {
  return (
    <div>
      <BrowserRouter>

      
        <Switch>
          <Route path="/HomePage" component={HomePage} />
          <Route path="/ResearchPage" component={ResearchPage} />
          <Route path="/SignUpPage" component={Signup} />
          <Route path="/LoginPage" component={LogIn} />       
        </Switch>
        
      
      <Menu />

      
      </BrowserRouter>
    </div>
  );
}

export default App 