import './Item.css'
import Card  from 'react-bootstrap/Card'
import { Link} from 'react-router-dom'


const Item = ({id, nombre, precio, img, }) => {
  return (
    <>
    {[
    'dark'
  ].map((variant) => (
    <Card 
    bg={variant.toLowerCase()}
    style={{ width: '25rem' }}
    key={variant}
    text={variant.toLowerCase() === "white"}
    className='cardproducto mb-2 lg-3 text-center'>
      <Card.Img className='imgproducto' variant="top" src={img} />
      <Card.Body>
        <Card.Title style={{ fontSize: 'xl', color: 'withe' }}>{nombre}</Card.Title>
        <Card.Text style={{ fontSize: 'md', color: 'red' }}>
          <> <strong > Precio: ${precio}</strong></>
          <br />
          <>ID:{id}</>
        </Card.Text>
      </Card.Body>
      <Link className='ver' to={ `/item/ ${id} `}>Ver Detalles</Link>
    </Card>
  ))}
  </>
  );
}

export default Item