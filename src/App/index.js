import styles from './App.module.css'
import Home from 'pages/Home'

function App() {
  return (
    <div>
      <p className={styles.red}>Blabla</p>
      <Home />
    </div>
  );
}

export default App