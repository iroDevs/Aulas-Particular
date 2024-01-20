import './App.css';

import {useState} from 'react';






function ItensSalvos({nome, idade, email}) {

  

  return (
   <>
    <div>
        <h2>nome:</h2>
        <h2>{nome}</h2>

        <h2>Idade:</h2>
        <h2>{idade}</h2>

        <h2>Email:</h2>
        <h2>{email}</h2>      
    </div>
      
   </>
    
  );
}

export default ItensSalvos;