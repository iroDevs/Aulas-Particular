import { Button } from "reactstrap";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";


function Pagina1() {
    const navigate = useNavigate();

    function handleClick() {
      console.log("Clicou no botão");
      navigate("/pagina2");
    }

    return (
      <>
        <h1>Clicque no botao para ir para pagina 2</h1>
        <Button color="danger" onClick={handleClick}>Ir para pagina 2 de botao</Button>
        <Link to={"/pagina2"}>Ir para pagina 2</Link>
      </>
    );
  }

  export default Pagina1;
