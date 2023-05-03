import './CartWidget.css'
const CartWidget = () => {
    const imgcarrito = "/imagenes/botón-rojo-del-carro-de-la-compra-icono-simple-aislado-en-el-fondo-blanco-almacene-carretilla-con-las-ruedas-108518705-removebg-preview-removebg-preview.png"
    
  return (
    <div className='carrito'>
        <img src= {imgcarrito} alt="img1" width={50} height={50} />
        <p>10</p>
    </div>
  )
}

export default CartWidget