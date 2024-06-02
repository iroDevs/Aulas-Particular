import { Button } from "reactstrap";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";


function ExibirNome() {
    const { nome } = useParams();
    const numero = 3;

    return (
      <>
        <h1>Esse é o nome</h1>
        <h2>Nome {nome}</h2>
        <Link to={"/pagina2"}>Ir para pagina 2</Link>

        {
            numero === 3 ? <h1>O numero é 3</h1> : undefined
        }
      </>
    );
  }

  export default ExibirNome;
