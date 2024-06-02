import { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Input } from "reactstrap";
import { useNavigate } from "react-router-dom";


function Pagina2() {
    const [nome, setNome] = useState("");
    const navigate = useNavigate();

    function handleClick() {
      navigate(`/exibir-nome/${nome}`)
    }
    return (
      <>
       <h1>Pagina 2 esta aqui</h1>

       <Input type="text" placeholder="Digite seu nome" onChange={(e) => setNome(e.target.value)} />
       <Button onClick={handleClick}>Enviar</Button>
       <Link to={"/pagina1"}>Ir para pagina 1</Link>
      </>
    );
  }

  export default Pagina2;
