import './cardpc.css'
import Contador from '../contado/contador.jsx'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const Cardpc = () => {
    const img1 = "/imagenes/D_NQ_NP_883058-MLU54169080778_032023-V.jpg"
    const img2 = "/imagenes/descarga (1).jpg"
    const img3 = "/imagenes/descarga.jpg"
    const img4 = "/imagenes/images (1).jpg"
    const img5 = "/imagenes/images (2).jpg"
    const img6 = "/imagenes/images.jpg"
  return (
    <Container fluid>
        <Row>
            <Col>
            <Contador inicial= {1} stock={10}/>
            </Col>
            <Col>
            <Contador inicial= {1} stock={10}/>
            </Col>
            <Col>
            <Contador inicial= {1} stock={10}/>
            </Col>
        </Row>
        <Row>
            <Col>
            <Contador inicial= {1} stock={10}/>
            </Col>
            <Col>
            <Contador inicial= {1} stock={10}/>
            </Col>
            <Col>
            <Contador inicial= {1} stock={10}/>
            </Col>
        </Row>
    </Container>
  )
}

export default Cardpc