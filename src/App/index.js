import styles from './App.module.css'
import { Link } from 'react-router-dom'
import LogIn from '../pages/LoginPage';
import Signup from '../pages/SignUpPage';


function App() {
  return (
    <div>
      <LogIn />
      <Signup />
    </div>
  );
}

export default App 