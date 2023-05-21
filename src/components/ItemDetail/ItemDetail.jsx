import  "./ItemDetail.css"
import Card  from 'react-bootstrap/Card'
import  Button  from 'react-bootstrap/Button';
import Hooks from "../Hooks/hooks";

const ItemDetail = ({id, nombre,descripcion, precio, img, }) => {
  return (
    <>
    {[
    'dark'
  ].map((variant) => (
    <Card 
    bg={variant.toLowerCase()}
    style={{ width: '50%' }}
    key={variant}
    text={variant.toLowerCase() === "white"}
    className='cardproducto col-md-6 offset-md-3 text-center'>
      <Card.Img className='imgproducto' variant="top" src={img} />
      <Card.Body>
        <Card.Title style={{ fontSize: 'xl', color: 'red' }} >{nombre}</Card.Title>
        <Card.Text style={{ color: 'white', fontSize: 'md' }} >
          <> 
          Descripción: {descripcion}
          <br />
          <strong className="precio"> Precio: ${precio}</strong></>
          <br />
          <>ID:{id}</>
        </Card.Text>
      </Card.Body>
      <Hooks className="text-withe"/>
    </Card>
  ))}
  </>
  );
}

export default ItemDetail