import { useState, useContext } from "react"
import { CarritoContext } from "../../context/CarritoContext"
import { db } from "../../services/config"
import { collection, addDoc } from "firebase/firestore"
import "./Checkout.css"
import { Form, Button } from "react-bootstrap"

const Checkout = () => {
    const {carrito, vaciarCarrito} =useContext(CarritoContext);
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [telefono, setTelefono] = useState("");
    const [email, setEmail] = useState("");
    const [emailconfirmacion, setConfirmacion] = useState("");
    const [error, setError] = useState("");
    const [ordenId, setOrdenId] = useState("");
    
    const manejadorFormulario = (event) => {
        event.preventDefault();
        if(!nombre || !apellido || !telefono || !email || !emailconfirmacion){
            setError ("Por favor complete todos los campos");
            return;
        }
        if(email !== emailconfirmacion){
            setError("Los campos del Email no coinciden");
            return;
        }
        
        const orden ={
            items: carrito.map(producto => ({ 
                id: producto.item.id,
                nombre: producto.item.nombre,
                cantidad: producto.item.cantidad})),
                total: carrito.reduce((total, producto)=>
                total + producto.item.precio * producto.cantidad, 0),
                nombre,
                apellido,
                telefono,
                email,
        };
        console.log("Orden:", orden);
        addDoc(collection(db, "ordenes"), orden)
        .then(docref => {
            setOrdenId(docref.id);
            vaciarCarrito();
        })
        .catch(error=> {
            console.error("Error al crar la orden", error)
            setError("Se produjo un  error al crear la orden, intente nuevamente")
        })
    }

    return(
    <div className="formconteiner">
        <h2>Checkout</h2>
        <Form className="formulario" onSubmit={manejadorFormulario}>
        {carrito.map(producto=>(
            <div key={producto.item.id}>
            <p>
                {producto.item.nombre} x {producto.cantidad}
            </p>
            <p>Precio $: {producto.item.precio}</p>
            <hr />
            </div>
        ))}
        <hr />
        <div className="form-group">
            <label htmlFor="">Nombre</label>
            <input type="text" value={nombre} onChange={(e)=>setNombre(e.target.value)}/>
        </div>
        <div className="form-group">
            <label htmlFor="">Apellido</label>
            <input type="text"value={apellido} onChange={(e)=>setApellido(e.target.value)} />
        </div>
        <div className="form-group">
            <label htmlFor="">Telefono</label>
            <input type="text" value={telefono} onChange={(e)=>setTelefono(e.target.value)}/>
        </div>
        <div className="form-group">
            <label htmlFor="">Email</label>
            <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
        </div>
        <div className="form-group">
            <label htmlFor="">Email confirmacion</label>
            <input type="email" value={emailconfirmacion} onChange={(e)=>setConfirmacion(e.target.value)}/>
        </div>
        {error && <p className="error">{error}</p>}
        <Button variant="danger" type="submit">Finalizar compra</Button>
        </Form>
        {
            ordenId && (
                <strong>Gracias por tu compra! Tu número de orden es {ordenId} </strong>
            )
        }
    </div>
  )
}

export default Checkout