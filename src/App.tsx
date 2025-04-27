import { useState, createContext } from "react";

import Quadrado1 from './components/Quadrado1'
import QuadradoProvider from "./context/QuadradoProvider";

import './App.css'

// createContext -> cria um contexto
// useContext -> consome o contexto

function App() {

  return (
    <>
    <QuadradoProvider>
      <Quadrado1 />
    </QuadradoProvider>
    </>
  )
}

export default App
