import styles from './App.module.css'
import { Link } from 'react-router-dom'
import LogIn from '../pages/LoginPage';
import Header from '../components/Header';
import Signup from '../pages/SignUpPage';
import ArtistPage from '../pages/ArtistPage';
import HomePage from '../pages/HomePage';


{/*import HomePage from '../pages/HomePage';*/}


function App() {
  return (
    <div>
<<<<<<< HEAD
      <ArtistPage />
=======
      <Header />
>>>>>>> 9c61223eae7fd143145f78bc03589a76e162b2d7
      <LogIn />
      <Signup />
      <HomePage />
    </div>
  );
}

export default App