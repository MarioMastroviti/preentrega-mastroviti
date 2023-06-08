import CartWidget from '../CartWidget/CartWidget'
import './NavBar.css'

const NavBar = () => {
  return (
    <header>
<nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <h1 className="navbar bg-info" href="#">
      MUYU TERAPIAS
    </h1>
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar" style={{ backgroundColor: "#e3f2fd" }}>
        <li className="nav-item">
            Inicio
        </li>
        <li className="nav-item">
             Experiencias
       </li>
        <li className="nav-item dropdown">
             Productos
          <ul className="dropdown-menu">
            <li>              
                Cremas
           </li>
            <li>              
                Aceites
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li>              
                Promociones
            </li>
          </ul>
        </li>
        <li className="nav-item">
          Contacto
        </li>
      </ul>
   </div>
    <CartWidget/>
  </div>
</nav>


    </header>
  )
}

export default NavBar