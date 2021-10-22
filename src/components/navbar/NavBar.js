import './NavBar.css'
import logoH from '../../assets/HardLogo.png'
import CartWidget from '../CartWidget/CartWidget'
import {Link} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'

const NavBar = ({product}) => {

    return (

        <>

        <div className="divLogo">
            <img src={logoH} className="logo" alt="logo-tienda"/>
          <CartWidget product={product}/>
        </div>

        <nav className="navbar navbar-light navbar-expand-lg navMenu">
        <div className="container-fluid">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav lista">
                <li className="nav-item lista__item" id="01"><Link className="nav-link" to={`/inicio`}>Inicio</Link></li>
                <li className="nav-item lista__item" id="02"><Link className="nav-link" to={`/productos`}>Productos</Link></li>
                <li className="nav-item lista__item"><Link className="nav-link" to={`/category/equipos-armados`}>Equipos Armados</Link></li>
                <li className="nav-item lista__item"><Link className="nav-link" to={`/category/hardware`}>Hardware</Link></li>
                <li className="nav-item lista__item" id="04">
                  <a className="linkSponsor" href="/inicio">Marcas Sponsor</a>
                  <ul className="dropdown-menu">  
                    <li> 
                        <img src="https://compragamer.net/imagenes_marcas/imagen_marca_301_5_491.png" alt="img-marca"/>
                    </li>
                    <li className="liEsp">
                        <img src="https://compragamer.net/imagenes_marcas/imagen_marca_321_5_189.png" alt="img-marca"/>
                    </li>
                    <li className="liEsp">
                        <img src="https://compragamer.net/imagenes_marcas/imagen_marca_362_5_856.jpg" alt="img-marca"/>
                    </li>
                    <li className="liEsp">
                        <img src="https://compragamer.net/imagenes_marcas/imagen_marca_363_8_39.png" alt="img-marca"/>
                    </li>
                    <li className="liEsp">
                        <img src="https://compragamer.net/imagenes_marcas/imagen_marca_334_5_593.png" alt="img-marca"/>
                    </li>
                    <li className="liEsp">
                        <img src="https://compragamer.net/imagenes_marcas/imagen_marca_292_5_834.png" alt="img-marca"/>
                    </li>
                    <li className="liEsp">
                        <img src="https://compragamer.net/imagenes_marcas/imagen_marca_330_5_779.png" alt="img-marca"/>
                    </li>
                  </ul>
                </li>
            </ul>
          </div>
        </div>
      </nav>

        </>

    )

}


export default NavBar

