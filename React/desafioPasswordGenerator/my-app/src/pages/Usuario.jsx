import React from 'react';
import { Link, useParams } from 'react-router-dom';
import Usuarios from './usuarios';
import { useContext } from 'react';
import UsuarioContext from '../context/UsuarioContext';
// import { Container } from './styles';

function Usuario() {
    const { id } = useParams();
    const {setUsuario} = useContext(UsuarioContext);

    const usuario = Usuarios.find((usuario) => usuario.id === parseInt(id));
    setUsuario(usuario);
  return (
    <>
        <h1>Perfil do usuário</h1>
        {usuario && (
            <>
                <p>Nome: {usuario.nome}</p>
                <p>Idade: {usuario.idade}</p>
                <p>Email: {usuario.email}</p>
                <p>Telefone: {usuario.telefone}</p>
            </>
        )}

        <Link to="/">Voltar para a página home</Link>
    </>
  );
}

export default Usuario;