
import Quadrado2 from "./Quadrado2";
import { useContext } from "react";
import { QuadradoContexto } from "../App";
export default function Quadrado1(){

    const conteudo_do_contexto = useContext(QuadradoContexto)
    console.log(conteudo_do_contexto);


    return(
        <>

        <div style={{width: "300px", height: "300px", backgroundColor: "green"}}>
            <Quadrado2 />
        </div>
        <input type="text"  onChange={(e) =>
            conteudo_do_contexto.setValor(e.target.value)
        } />
        </>
    )
}