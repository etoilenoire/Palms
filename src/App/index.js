import styles from './App.module.css'
import { Link } from 'react-router-dom'
import { BrowserRouter, Switch, Route } from "react-router-dom";
import LogIn from '../pages/LoginPage';
import Signup from '../pages/SignUpPage';
import ArtistPage from '../pages/ArtistPage';
import Header from '../components/Header';
import Menu from '../components/Menu';




function App() {
  return (
    <div>
      <Header />
      <BrowserRouter>
        <Switch>
          <Route path="/SignUpPage" component={Signup} />
          <Route path="/LoginPage" component={LogIn} />
        </Switch>
      </BrowserRouter>
      <LogIn />
      <Signup />
      <Menu />

      

    </div>
  );
}

export default App 