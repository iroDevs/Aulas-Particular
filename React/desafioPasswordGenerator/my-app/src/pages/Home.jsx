import React from 'react';
import { Link,useNavigate } from 'react-router-dom';
import Usuarios from './usuarios';
import { useContext } from 'react';
import UsuarioContext from '../context/UsuarioContext';


function Home() {
    const navigate = useNavigate();
    const {usuario} = useContext(UsuarioContext);
    console.log(usuario);



  return (
    <>
      <h1>Tela de home</h1>
        {
            Usuarios.map((usuario) => (
                <div key={usuario.id}>
                    <Link to={`/usuario/${usuario.id}`}>{usuario.nome}</Link>
                </div>
            ))
        }

        {
            usuario && (
                <>
                <h1>Ultimo usuario acessado</h1>
                    <p>Nome: {usuario.nome}</p>
                    <p>Idade: {usuario.idade}</p>
                    <p>Email: {usuario.email}</p>
                    <p>Telefone: {usuario.telefone}</p>
                </>
            )
        }



       <button onClick={()=> navigate('/about')}>Ir para pagina Sobre</button>
    </>
  );
}

export default Home;