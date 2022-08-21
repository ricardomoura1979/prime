import './header.css'
import { Link } from 'react-router-dom'
// import Primeflix from './public/img/primeflix.png'






function Header() {
  return(
    <header>
      {/* <img src={ Primeflix } width="100" height="50"/> */}
      <Link className="logo" to="/"> Home </Link>
      <Link className="favoritos" to="/favoritos"> Meus Filmes </Link>
    </header>
  )
}

export default Header;