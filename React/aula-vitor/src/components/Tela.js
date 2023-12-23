import {useState} from 'react';
import Quadrado from './Quadrado';
import Figura from './Figura';

// import { Container } from './styles';

function Tela() {
    const [nome, setNome] = useState('anônimo');
    const [title, setTitle] = useState('');

    function handleChangeNome(e){
        setNome(e.target.value);
    }

    function handleChangeTitle(){
        setTitle(nome);
    }
    
  return (
    <>
        <h1>{title}</h1>
        <input type='text' onChange={handleChangeNome} placeholder='Digite seu nome' />
        <button onClick={handleChangeTitle}>Mudar título</button>

        <Figura formato={title}></Figura>
    </>
  );
}

export default Tela;