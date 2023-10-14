import '../App.css'
import { NavLink } from "react-router-dom"

function Header() {

  return (
    <nav id="header">
      <ul>
        <li> 
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/partijen">Partijen</NavLink>
        </li>
        <li>
          <NavLink to="/kieswijzer">Kieswijzer</NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Header
