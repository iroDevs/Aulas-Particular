import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";


function Pagina1() {
    
    let {Email} = useParams();
    let nome = null;
  
    return (
      <>
        <h1>bem vindo: {Email}</h1>
        {nome}
      </>
    )
  }
  
  export default Pagina1;