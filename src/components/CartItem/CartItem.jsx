import { useContext } from "react";
import { CarritoContext } from "../../context/CarritoContext";
import { Button } from "react-bootstrap";
import React from 'react'

const CartItem = (item, cantidad) => {
    const {eliminarproducto} = useContext(CarritoContext)
  return (
    <div>
        <h4>{item.nombre}</h4>
        <p>{cantidad}</p>
        <p>Precio: {item.precio}</p>
        <Button onClick={()=>eliminarproducto(item.id)}></Button>
    </div>
  )
}

export default CartItem