import React from 'react'
import { Link } from 'react-router-dom'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {

  return (
    <nav>
      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      <ul>
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/favs">Favoritos</Link></li>
        <li><Link to="contact">Contacto</Link></li>
      </ul>
      <button>Change theme</button>
    </nav>
  )
}

export default Navbar