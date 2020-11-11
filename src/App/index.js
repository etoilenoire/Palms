import styles from './App.module.css'
import { Link } from 'react-router-dom'
import LogIn from '../pages/LoginPage';
import Signup from '../pages/SignUpPage';
import ArtistPage from '../pages/ArtistPage';
import Header from '../components/Header';




function App() {
  return (
    <div>
      <Header />
      <LogIn />
      <Signup />

      

    </div>
  );
}

export default App 