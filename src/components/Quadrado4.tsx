import { useContext } from "react";
import IQuadrado from "./interfaces";
import { QuadradoContexto } from "../App";

export default function Quadrado4(){
    const conteudo_do_contexto = useContext(QuadradoContexto)
    return(
        <>
         <div style={{width: "50px", height: "50px", backgroundColor: "yellow"}}>
            <h4>{conteudo_do_contexto.valor}</h4>
         </div>
        </>
    )
}