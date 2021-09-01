import './NavBar.css'
import logoH from '../../assets/HardLogo.png'
import CartWidget from '../Button/CartWidget'




const NavBar = () => {

    return (

        <nav className="navMenu">
            <div className="divLogo">
                <img src={logoH} className="logo" alt="logo-tienda"/>
                <CartWidget />
            </div>
            <ul className="lista">
                <li className="lista__item"><a href="#">Inicio</a></li>
                <li className="lista__item"><a href="#">Productos</a></li>
                <li className="lista__item"><a href="#">Equipos Armados</a></li>
                <li className="lista__item"><a href="#">Contacto</a></li>
            </ul>


            
        </nav>

    )

}


export default NavBar

