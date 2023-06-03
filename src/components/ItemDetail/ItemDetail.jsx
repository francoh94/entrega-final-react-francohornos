import  "./ItemDetail.css"
import Card  from 'react-bootstrap/Card'
import { useState, useContext } from "react";
import { Link } from "react-router-dom"
import { ItemCount } from "../ItemCount/ItemCount";
import { CarritoContext } from "../../context/CarritoContext";


const ItemDetail = ({id, nombre,descripcion, precio, img,stock }) => {
  const [agregarCantidad, setAgregarCantidad]= useState(0);
  
  const {agregarProductos} = useContext (CarritoContext);

  const manejadorCantidad = (cantidad) => {
    setAgregarCantidad(cantidad);
    
    const item = {id, nombre, precio};
    agregarProductos (item, cantidad)
  }
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
      {
        agregarCantidad > 0 ? (<Link className="tc" to="/cart" >Terminar compra</Link>) : (<ItemCount className="text-withe" inicial={1} stock={stock} funcionAgregar={manejadorCantidad}/>)
      }
    </Card>
  ))}
  </>
  );
}

export default ItemDetail