import {useState} from 'react'

export const useContador = ({stock=10, inicial=1}) => {
    const [contador, setContador] = useState(inicial);

    const aumentarContador = () =>{ 
    if (contador < stock){
    setContador(contador + 1 );
    }
    }
    const disminuirContador = () => {
        if (contador > inicial){
    setContador(contador - 1);
    }
    }
     
    return { contador, aumentarContador, disminuirContador}
}