import './App.css'

function Quadrado(props) {
  let nome = props.nome;

    return (
    <div className="quadrado">
        <h1>{nome}</h1>
    </div>
  );
}

export default Quadrado;