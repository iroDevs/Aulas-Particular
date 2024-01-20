import React from 'react';



function ExibeNome(props) {
  let { changeNome } = props;

  function handleChange(event) {
    let valor = event.target.value
    changeNome(valor)
  }
  
    return (
      <>
        <input type="text" onChange={handleChange} />
        <h1>{props.nome}</h1>
      </>
  ) ;
}

export default ExibeNome;