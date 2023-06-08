import NavBar from './componentes/NavBar/NavBar'
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer'
import Mensaje from './componentes/Mensaje/Mensaje'

import './App.css'

function App() {
 

  return (
    <>
      <NavBar/>
      <ItemListContainer greeting = {"Bienvenidos a la tienda oficial de aceites Muyu"} />
      <Mensaje/>
    </>

   
  )
}

export default App
