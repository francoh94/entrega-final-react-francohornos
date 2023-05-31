import { useContext } from "react";
import { CarritoContext } from "../../context/CarritoContext";
import { Button } from "react-bootstrap";
import React from 'react'

const CartItem = (item, cantidad) => {
    const {eliminarproducto} = useContext(CarritoContext)
  return (
    <div>
        <h4>{item.nombre}</h4>
        <p>Cantidad:{cantidad}</p>
        <p>Precio: {item.precio}</p>
        <Button onClick={()=>eliminarproducto(item.id)}>Eliminar</Button>
    </div>
  )
}

export default CartItem