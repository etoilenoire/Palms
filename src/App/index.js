import styles from './App.module.css'
import { Link } from 'react-router-dom'
import Button from '../components/Button'
import Input from '../components/Input'
import Title from '../components/Title';
import Subtitle from '../components/SubTitle';
import Lien from '../components/Lien';
import CardArtist from '../components/CardArtist';


function App() {
  return (
    <div>
      {/* <HomePage/> */}
      <Title/>
      <Subtitle/>
      <Lien/>
      <Button />
      <Input />
      <CardArtist/>
      <CardArtist/>
    </div>
  );
}

export default App