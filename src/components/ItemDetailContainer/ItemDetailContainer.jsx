import { useState, useEffect } from "react";
import { db } from "../../services/config";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { getDoc, doc } from "firebase/firestore";

const ItemDetailContainer = () => {
    const [producto, setProducto] = useState(null)

    const {idItem} = useParams();

    useEffect(()=>{
    const nuevodoc = doc(db, "inventario",idItem )
    getDoc ( nuevodoc)
    .then(res=> {
      const data = res.data();
      const nuevoProducto = {id: res.id, ...data}
      setProducto(nuevoProducto);
    })
    .catch(error => console.log(error))
    },[idItem])
  return (
    <>
    <ItemDetail {...producto}/>
    </>
  )
}

export default ItemDetailContainer