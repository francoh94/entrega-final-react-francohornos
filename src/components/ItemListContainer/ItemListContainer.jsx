import  './ItemListContainer.css'
import { useState, useEffect } from 'react'
import ItemList from '../ItemList/itemList'
import { getstore, getcategoria } from '../../../asyncmock'
import { useParams } from 'react-router-dom'

const ItemListConteiner = ({greeting}) => {
  const [store, setstore] = useState([]);

const {idcat} = useParams();

  useEffect(()=>{
    const funcionprod = idcat ? getcategoria : getstore;

    funcionprod (idcat)
    .then(res => setstore(res))
    .catch(error => console.error(error))
  },[idcat])
    
  return (
    <>
    <ItemList productos= {store}/>
    </>
  )
}

export default ItemListConteiner