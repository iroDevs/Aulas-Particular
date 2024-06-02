import React,{useContext} from 'react';
import { Link } from 'react-router-dom';
import { TemaContext } from '../context/ThemaContext';
import { Button } from 'reactstrap';

// import { Container } from './styles';

function Page1() {
    const {tema,  changeTema} = useContext(TemaContext);
    const contexto  = useContext(TemaContext);
    console.log(contexto.batata);
    const style = {}

    if (tema === 'claro') {
        console.log(tema);
        style.backgroundColor = 'white';
        style.color = 'black';
        style.width = '100%';
        style.height = '100vh';
      }
      else {
        console.log(tema);
        style.backgroundColor = 'black';
        style.color = 'white';
        style.width = '100%';
        style.height = '100vh';
      }

  return (
    <>
    <div style={style}>
        <h1>Page1</h1>
        <p>
            Essa é a pagina 1
        </p>
        <h1> Meu contexto diz que o tema é {tema}</h1>
        <Link to="/page2">Ir para a pagina 2</Link>
        <Button onClick={changeTema}>Mudar Tema</Button>
    </div>
    </>
  );
}

export default Page1;