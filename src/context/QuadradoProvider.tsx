import { useState } from "react";
import { QuadradoContexto } from "./QuadradoContexto"


export default function QuadradoProvider({children}){
    const [valor, setValor] = useState(1);

    const store = {
        valor,
        setValor,
    }

    return(
        <>
        <QuadradoContexto.Provider value={store}>
            {children}
        </QuadradoContexto.Provider>
        </>
    )
}