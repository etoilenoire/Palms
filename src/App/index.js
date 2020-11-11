import styles from './App.module.css'
import { Link } from 'react-router-dom'
import LogIn from '../pages/LoginPage';
import Signup from '../pages/SignUpPage';
import ArtistPage from '../pages/ArtistPage';
import Homepage from '../pages/Homepage';



function App() {
  return (
    <div>
      <LogIn />
      <Signup />
      <Homepage />
    </div>
  );
}

export default App 