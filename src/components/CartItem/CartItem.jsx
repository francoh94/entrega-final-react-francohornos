import { useContext } from "react";
import { CarritoContext } from "../../context/CarritoContext";
import { Button } from "react-bootstrap";
import "./CartItem.css";

const CartItem = ({ item, cantidad }) => {
  const { eliminarProducto } = useContext(CarritoContext);
  return (
    <div className="cartitem">
      <h4>{item.nombre}</h4>
      <p>Cantidad:{cantidad}</p>
      <p className="precio">Precio: {item.precio}</p>
      <Button variant="outline-light" onClick={() => eliminarProducto(item.id)}>
        Eliminar
      </Button>
    </div>
  );
};

export default CartItem;
