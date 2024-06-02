import './App.css';
/* eslint-disable */

import {useState,useEffect} from 'react';
import Pai from './components/Pai';




function App() {
  const [nome , setNome] = useState('Pedro');

return (
  <>
  <h1>App</h1>
  <Pai nome={nome} />
 </>

 );
}

export default App;
