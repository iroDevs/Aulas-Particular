import Quadrado from './Quadrado'

function App() {
  
  const nome = "Rafael";


  
  return (
    <> 
    <h1>Nome é esse: {nome} </h1> 
    <Quadrado nome={"Primeiro"} />
    <Quadrado nome={"Segundo"} />
    <Quadrado nome={"Terceiro"} />
    <Quadrado nome={"Quarto"} />

    </>
 );
}

export default App;
