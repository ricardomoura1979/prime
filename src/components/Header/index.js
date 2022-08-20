import './header.css'
import { Link } from 'react-router-dom'
// import Primeflix from './docs/primeflix.png'






function Header() {
  return(
    <header>
      {/* <div>
        <h1>
        <img src={Primeflix} />
        </h1>
      </div> */}
      <Link className="logo" to="/"> Home </Link>
      <Link className="favoritos" to="/favoritos"> Meus Filmes </Link>
    </header>
  )
}

export default Header;