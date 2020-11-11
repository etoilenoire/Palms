import styles from './App.module.css'
import { Link } from 'react-router-dom'
import LogIn from '../pages/LoginPage';
import SignIn from '../pages/SignUpPage';

{/*import HomePage from '../pages/HomePage';*/}


function App() {
  return (
    <div>
      <LogIn />
      <SignIn />
      {/*<HomePage />*/}
    </div>
  );
}

export default App