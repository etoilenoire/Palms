import styles from './App.module.css'
import Home from 'pages/HomePage'
import Button from '../components/Button'
import Input from '../components/Input'

function App() {
  return (
    <div>
      <p className={styles.red}>Blabla</p>
      <Home />
      <Button />
      <Input />
    </div>
  );
}

export default App