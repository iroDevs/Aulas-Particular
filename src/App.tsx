import { useState, createContext } from "react";

import Quadrado1 from './components/Quadrado1'
import QuadradoProvider from "./context/QuadradoProvider";
import { z } from "zod";
import { fromError } from 'zod-validation-error';
import './App.css'

// createContext -> cria um contexto
// useContext -> consome o contexto

//zod

/*
esquema -> dizer como o objeto vai ser
validar baseado no esquema
*/

const UsuarioSchema = z.object({
  nome: z.string(),
  idade: z.number().min(18, 'Idade deve ser maior que 18').max(100, 'Idade deve ser menor que 100'),
  email: z.string().email(),
  senha: z.string().min(8),
})

function App() {
  const [usuario, setUsuario] = useState({
    nome: "",
    idade: 0,
    email: "",
  })
  try {
    const data = UsuarioSchema.parse(usuario)
  } catch (error) {
    console.log(error);
    const validationError = fromError(error);
    console.log(validationError);



  }


  //Enviar para backend


  return (
    <>
    {/*<QuadradoProvider>
      <Quadrado1 />
    </QuadradoProvider>*/}


    </>
  )
}

export default App
