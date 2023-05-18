import './App.css'
import NavBar from './components/Nav-Bar/NavBar'
import ItemListConteiner from './components/ItemListContainer/ItemListContainer.jsx'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import { BrowserRouter } from 'react-router-dom'
import { Route } from 'react-router-dom'
import { Routes } from 'react-router-dom'

function App() {
  return (
    <>
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/" element={<ItemListConteiner greeting={"Store"}/>}/>
        <Route path="/categoria/:idcat" element = {<ItemListConteiner/>}/>
        <Route path="/item/:idItem" element = {<ItemDetailContainer/>}/>
      </Routes>
    </BrowserRouter>
  </>
  )
}

export default App
