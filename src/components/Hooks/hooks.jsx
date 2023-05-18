import { useContador } from './useContador'
import { Button } from 'react-bootstrap'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

const hooks = () => { 
    const {contador, aumentarContador, disminuirContador} = useContador(1,10)
  return (
    <Container>
        <Row>
        <Col><Button variant="danger" onClick={disminuirContador}>-</Button></Col>
        <Col><strong>{contador}</strong></Col>
        <Col><Button variant="danger" onClick={aumentarContador}>+</Button></Col>
        <Col><Button variant="danger">Agregar al carrito</Button></Col>
        </Row>
    </Container>
  )
}

export default hooks