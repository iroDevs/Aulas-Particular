import { useState } from "react";
import { useNavigate } from "react-router-dom";
function Home() {
    const navigate = useNavigate()
    const [Email, setEmail] = useState('');
    const [Senha, setSenha] = useState('');

    function handleClick() {
        //console.log(Email);
      if(Email !== '' && Senha !== ''){
        navigate(`/pagina1/${Email}`);
    }else{
        alert('Preencha todos os campos');
    }
  }
    return (
      <>
        <h1>Email:</h1>
        <input type="text" value={Email} onChange={(e) => setEmail(e.target.value)} />
        <h1>Senha:</h1>
        <input type="password" value={Senha} onChange={(e) => setSenha(e.target.value)} />
        <button onClick={handleClick}>Entrar</button>
        
      </>
    )
  }

  export default Home;