import { useState, createContext } from "react";


import Quadrado1 from './components/Quadrado1'


import './App.css'

// createContext -> cria um contexto
// useContext -> consome o contexto

export const QuadradoContexto = createContext({})


function App() {
  const [valor, setValor] = useState(1);

  const store = {
    valor,
    setValor,
  }

  return (
    <>
    <QuadradoContexto.Provider value={store}>
      <Quadrado1 />
    </QuadradoContexto.Provider>

    </>
  )
}

export default App
