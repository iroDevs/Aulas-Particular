
import './App.css';
import Filtro from './components/Filtro';
import { Container } from 'reactstrap';
import data from './data/jogaodres';
import { useState } from 'react';
import ListaDeJogadores from './components/ListaDeJogadores';

function App() {
  const [jogadores, setJogadores] = useState(data)
  const [blocked, setBlocked] = useState([])
  
    
  return (
  <>
    <Container className=''>
      <Filtro list={jogadores} changeList={setJogadores} blockList={blocked} />
      <ListaDeJogadores list={jogadores} blockList={blocked} ChangeList={setJogadores} ></ListaDeJogadores>
    </Container>
  </>
  );
}

export default App;
