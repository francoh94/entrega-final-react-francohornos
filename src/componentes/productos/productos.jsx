import { useState, useEffect } from "react"
import { collection, query, getDocs, where } from "firebase/firestore"
import { db } from "../../services/config"

const productos = () => {
    const [productos, setproductos] = useState ([]);

    useEffect (()=>{
    const misProductos = query(collection(db, "productos"))

        getDocs(misProductos)
        .then(respuesta=>{
            setproductos(respuesta.docs.map((doc)=>({id:doc.id, ...doc.data()})));
        })
    },[])
  return (
    <>
    <h2>Mis productos</h2>
    <div className="producto-container">{
            productos.map((producto) => {}
    })

    </div>
    
    </>
  )
}

export default productos