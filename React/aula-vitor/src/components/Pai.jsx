import React from 'react';
import Filho from './Filho';

// import { Container } from './styles';

function Pai({nome}) {
  return (
    <>
        <h1>Pai</h1>
        <Filho nome={nome}  />
    </>
  );
}

export default Pai;