import { useState, useContext, useEffect } from "react";
import { CarritoContext } from "../../context/CarritoContext";
import { db } from "../../services/config";
import { collection, addDoc, getDoc, updateDoc, doc } from "firebase/firestore";
import "./Checkout.css";
import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Checkout = () => {
  const { carrito, vaciarCarrito, total } = useContext(CarritoContext);
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [telefono, setTelefono] = useState("");
  const [email, setEmail] = useState("");
  const [emailconfirmacion, setConfirmacion] = useState("");
  const [error, setError] = useState("");
  const [ordenId, setOrdenId] = useState("");

  useEffect(() => {
    if (ordenId) {
      console.log("Orden recibida:", ordenId);
    }
  }, [ordenId]);

  const manejadorFormulario = (event) => {
    event.preventDefault();
    if (!nombre || !apellido || !telefono || !email || !emailconfirmacion) {
      setError("Por favor complete todos los campos");
      return;
    }
    if (email !== emailconfirmacion) {
      setError("Los campos del Email no coinciden");
      return;
    }
    const orden = {
      items: carrito.map((producto) => ({
        id: producto.item.id,
        nombre: producto.item.nombre,
        cantidad: producto.cantidad,
      })),
      total: total,
      nombre,
      apellido,
      telefono,
      email,
      fecha: new Date(),
    };

    Promise.all(
      orden.items.map(async (productoOrden) => {
        const productoRef = doc(db, "inventario", productoOrden.id);
        const productoDoc = await getDoc(productoRef);
        const stockActual = productoDoc.data().stock;
        await updateDoc(productoRef, {
          stock: stockActual - productoOrden.cantidad,
        });
      })
    )
      .then(() => {
        addDoc(collection(db, "ordenes"))
          .then((docref) => {
            setOrdenId(docref.id);
            vaciarCarrito();
          })
          .catch((error) => {
            console.error("error al crear la orden", error);
            setError("se produjo un error al crear la orden");
          });
      })
      .catch((error) => {
        console.error("error al actualizar el stock", error);
        setError("se produjo un error al actualizar el stock");
      });

    console.log("Orden:", orden);
    addDoc(collection(db, "ordenes"), orden)
      .then((docref) => {
        setOrdenId(docref.id);
        vaciarCarrito();
      })
      .catch((error) => {
        console.error("Error al crar la orden", error);
        setError("Se produjo un  error al crear la orden, intente nuevamente");
      });
  };
  if (ordenId) {
    return (
      <div className="formconteiner">
        <h2>Checkout</h2>
        <strong>Gracias por tu compra! Tu número de orden es {ordenId}</strong>
        <hr />
        <br />
        <Link className="seguircomprando" to={"/"}>
          Segir comprando
        </Link>
      </div>
    );
  }

  return (
    <div className="formconteiner">
      <h2>Checkout</h2>
      <Form className="formulario" onSubmit={manejadorFormulario}>
        {carrito.map((producto) => (
          <div key={producto.item.id}>
            <p>
              {producto.item.nombre} x {producto.cantidad}
            </p>
            <p>Precio $: {producto.item.precio}</p>
            <hr />
          </div>
        ))}
        <h3 className="total">Total:{total}</h3>
        <hr />
        <div className="form-group">
          <label htmlFor="">Nombre</label>
          <input
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="">Apellido</label>
          <input
            type="text"
            value={apellido}
            onChange={(e) => setApellido(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="">Telefono</label>
          <input
            type="text"
            value={telefono}
            onChange={(e) => setTelefono(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="">Email confirmacion</label>
          <input
            type="email"
            value={emailconfirmacion}
            onChange={(e) => setConfirmacion(e.target.value)}
          />
        </div>
        {error && <p className="error">{error}</p>}
        <Button variant="danger" type="submit">
          Finalizar compra
        </Button>
      </Form>
    </div>
  );
};

export default Checkout;
