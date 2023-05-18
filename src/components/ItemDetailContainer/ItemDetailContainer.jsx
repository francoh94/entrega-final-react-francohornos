import { useState, useEffect } from "react";
import { getUnproducto } from "../../../asyncmock";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
    const [producto, setproducto] = useState(null)

    const {idItem} = useParams();

    useEffect(()=>{
    getUnproducto(idItem)
    .then(respuesta => setproducto(respuesta))
    .catch(error => console.error(error))
    },[idItem])
  return (
    <>
    <ItemDetail {...producto}/>
    </>
  )
}

export default ItemDetailContainer