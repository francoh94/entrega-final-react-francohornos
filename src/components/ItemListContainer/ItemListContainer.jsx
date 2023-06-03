import  './ItemListContainer.css'
import { useState, useEffect } from 'react'
import ItemList from '../ItemList/itemList'
import { useParams } from 'react-router-dom'
import { collection, getDocs, where, query } from 'firebase/firestore'
import { db } from '../../services/config'

const ItemListConteiner = () => {
  const [store, setstore] = useState([]);

const {idcat} = useParams();

  useEffect(()=>{
    const misProductos = idcat ? query(collection(db ,"inventario"), where("idcat", "==", idcat)) : collection (db, "inventario")
    
    getDocs(misProductos)
    .then(res => {
      const nuevosProductos = res.docs.map(doc =>{
        const data = doc.data()
        return {id: doc.id, ...data}
      })
      setstore(nuevosProductos)
    })
    .catch(error => console.log(error)) 
  },[idcat])
  return (
    <>
    <ItemList productos= {store}/>
    </>
  )
}

export default ItemListConteiner