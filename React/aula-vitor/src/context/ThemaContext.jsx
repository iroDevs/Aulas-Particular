/*eslint-disable */
import { createContext,useState } from "react";


export const TemaContext = createContext();

//Criar um provider para o contexto
export function TemaProvider({children}){

    const [tema, setTema] = useState('claro');

    function changeTema(){
        if(tema === 'claro'){
            setTema('escuro');
        }else{
            setTema('claro');
        }
    }

    const values = {
        tema,
        changeTema,
        batata: 'BBBB',
        idade: 12,
        forca: 100
    }

    return(
        <TemaContext.Provider value={values}>
            {children}
        </TemaContext.Provider>
    )
}
