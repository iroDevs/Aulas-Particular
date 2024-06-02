import React,{useContext} from 'react';
import { Link } from 'react-router-dom';
import { TemaContext } from '../context/ThemaContext';
import { Button } from 'reactstrap';

// import { Container } from './styles';

function Page2() {
  const {tema,  changeTema} = useContext(TemaContext);
  const style = {}

  if (tema === 'claro') {

    style.backgroundColor = 'white';
    style.color = 'black';
    style.width = '100%';
    style.height = '100vh';
  }
  else {
    style.backgroundColor = 'black';
    style.color = 'white';
    style.width = '100%';
    style.height = '100vh';
  }
  return (
    <>
    <div style={style}>
        <h1>Page2</h1>
        <p>
            Essa é a pagina 2
        </p>
        <h1> Meu contexto diz que o tema é {tema}</h1>
        <Link to="/page1">Ir para a pagina 1</Link>
        <Button onClick={changeTema}>Mudar Tema</Button>
    </div>
    </>
  );
}

export default Page2;