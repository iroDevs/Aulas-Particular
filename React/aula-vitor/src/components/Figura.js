import '../App.css';
import Quadrado from './Quadrado';
import Circulo from './Circulo';

function Figura(props) {

    let formato = props.formato;
  
    if (formato === 'quadrado') {
        return(
            <Quadrado />
        );
    }else if(formato === 'circulo'){
        return (
            <>
               <Circulo />
            </>
            
        );
    }else {
        return (
            <h1>Figura não encontrada</h1>
        );
    }
}

export default Figura;