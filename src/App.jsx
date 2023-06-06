import './App.css'
import NavBar from './components/Nav-Bar/NavBar'
import ItemListConteiner from './components/ItemListContainer/ItemListContainer.jsx'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { CarritoProvider } from './context/CarritoContext'
import Cart from './components/Cart/Cart' 
import Checkout from './components/Checkout/Checkout'

function App() {
  return (
    <>
    <BrowserRouter>
    <CarritoProvider>
      <NavBar/>
      <Routes>
        <Route path="/" element={<ItemListConteiner/>}/>
        <Route path="/categoria/:idcat" element = {<ItemListConteiner/>}/>
        <Route path="/item/:idItem" element = {<ItemDetailContainer/>}/>
        <Route path="*" element = {<h2>Sitio en construccion</h2>} />
        <Route path='/Cart' element={<Cart/>} />
        <Route path='/checkout' element={<Checkout/>}/>
      </Routes>
      </CarritoProvider>
    </BrowserRouter>
  </>
  )
}

export default App
