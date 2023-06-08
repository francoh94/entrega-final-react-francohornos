import { CarritoContext } from "../../context/CarritoContext";
import { Link } from "react-router-dom";
import { useContext } from "react";
import CartItem from "../CartItem/CartItem";
import { Button, Row, Col } from "react-bootstrap";
import "./Cart.css";

const Cart = () => {
  const { carrito, vaciarCarrito, total, cantidadTotal } =
    useContext(CarritoContext);
  if (cantidadTotal === 0) {
    return (
      <>
        <h2>No hay productos en el carrito</h2>
        <Link className="check" to="/">
          ver productos
        </Link>
      </>
    );
  }
  return (
    <div className="cart">
      <Row>
        <Col>
          {carrito.map((producto) => (
            <CartItem key={producto.item.id} {...producto} />
          ))}
          <h3 className="total"> Total: ${total}</h3>
          <h3>Cantidad total:{cantidadTotal}</h3>
          <Button variant="outline-light" onClick={vaciarCarrito}>
            Vaciar carrito
          </Button>
          <br />
          <br />
          <Link className="check" to="/checkout">
            Finalizar compra
          </Link>
        </Col>
      </Row>
    </div>
  );
};

export default Cart;
