import React, { useEffect, useState } from 'react';
import UserContext from './UsuarioContext';


function UserProvider({ children }) {
  const [usuario, setUsuario] = useState(null);


  const contextValue = {
    usuario,
    setUsuario,
  };

  return (
    <UserContext.Provider value={ contextValue }>
      { children }
    </UserContext.Provider>
  );
}



export default UserProvider;
