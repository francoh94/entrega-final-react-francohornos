import { CarritoContext } from "../../context/CarritoContext";
import { Link } from "react-router-dom";
import { useContext } from "react";
import CartItem from "../CartItem/CartItem";
import { Button } from "bootstrap";

import React from 'react'

const Cart = () => {
  const {carrito, vaciarCarrito, total, cantidadTotal} = useContext(CarritoContext)
  if (cantidadTotal === 0){
    return(
        <>
        <h2>No hay productos en el carrito</h2>
        <Link to="/">ver productos</Link>
        </>
    )
  }
  return(
    <div>
        {Carrito.map(producto=> <CartItem key={producto.id} {...producto}/>)}
        <h3> Total: ${total}</h3>
        <h3>Cantidad total:{cantidadTotal}</h3>
        <Button onClick={()=>vaciarCarrito} >Vaciar carrito</Button>
        <Link to="/checkout" >Finalizar compra</Link>
    </div>
  )
}

export default Cart