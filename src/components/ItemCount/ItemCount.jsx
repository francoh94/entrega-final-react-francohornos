import {useState} from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import { Button } from 'react-bootstrap'
import "./ItemCount.css"

export const ItemCount = ({stock, inicial, funcionAgregar}) => {
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
    return (
        <Container>
            <Row>
            <Col><Button variant="danger" onClick={disminuirContador}>-</Button></Col>
            <Col><strong>{contador}</strong></Col>
            <Col><Button variant="danger" onClick={aumentarContador}>+</Button></Col>
            <Col><Button onClick={() => funcionAgregar(contador)} variant="danger">Agregar al carrito</Button></Col>
            </Row>
        </Container>
    )
    }
