import './NavBar.css'
import logoH from '../../assets/HardLogo.png'
import CartWidget from '../Button/CartWidget'
import {Link} from 'react-router-dom'


const NavBar = () => {

    return (

        <nav className="navMenu">
            <div className="divLogo">
                <img src={logoH} className="logo" alt="logo-tienda"/>
                <CartWidget/>
            </div>
            <ul className="lista">
                <li className="lista__item" id="01"><Link to={`/inicio/01`}>Inicio</Link></li>
                <li className="lista__item" id="02"><Link to={`/productos`}>Productos</Link></li>
                <li className="lista__item" id="03"><Link to={`/equipos-armados/03`}>Equipos Armados</Link></li>
                <li className="lista__item" id="04"><Link to={`/contacto/04`}>Contacto</Link></li>
            </ul>


            
        </nav>

    )

}


export default NavBar

