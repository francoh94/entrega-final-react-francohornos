import './CartWidget.css'
import { useContext } from 'react'
import { CarritoContext } from '../../context/CarritoContext'
import { Link } from 'react-router-dom'

const CartWidget = () => {
  const {cantidadTotal} = useContext (CarritoContext)
    const imgcarrito = "/imagenes/botón-rojo-del-carro-de-la-compra-icono-simple-aislado-en-el-fondo-blanco-almacene-carretilla-con-las-ruedas-108518705-removebg-preview-removebg-preview.png"
    
  return (
    <div className='carrito'>
        <Link>
        <img src= {imgcarrito} alt="img1" width={50} height={50} />
        {
          cantidadTotal > 0 && <span>{cantidadTotal}</span>
        }
        </Link>
    </div>
  )
}

export default CartWidget