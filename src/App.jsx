import './App.css'
import NavBar from './components/nav-bar/NavBar.jsx'
import ItemListConteiner from './components/ItemListContainer/ItemListContainer.jsx'


function App() {
  return (
    <>
    <NavBar/>
    <ItemListConteiner greeting={"Hola Mundo"}/>
    </>
  )
}

export default App
