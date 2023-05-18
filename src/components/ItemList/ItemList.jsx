import Item from "../items/item"
import "./ItemList.css"

const itemList = ({productos}) => {
  return (
    <div className="contenedorpc">
        {productos.map(prod =><Item key={prod.id} {...prod}/>)}
    </div>
  )
}

export default itemList