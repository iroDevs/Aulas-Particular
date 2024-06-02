import React from 'react';
import Neto from './Neto';

// import { Container } from './styles';

function Filho({ nome }) {


  return (
    <>
        <h1>Filho</h1>
        <h4>Filho diz nome: {nome}</h4>
        <Neto />
    </>
  );
}

export default Filho;