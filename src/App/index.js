import styles from './App.module.css'
import { Link } from 'react-router-dom'
import LogIn from '../pages/LoginPage';
import Header from '../components/Header';
import Signup from '../pages/SignUpPage';


{/*import HomePage from '../pages/HomePage';*/}


function App() {
  return (
    <div>
      <Header />
      <LogIn />
      <Signup />
      {/*<HomePage />*/}
    </div>
  );
}

export default App