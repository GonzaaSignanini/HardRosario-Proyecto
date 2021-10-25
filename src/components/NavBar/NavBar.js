import './NavBar.css'
import logoH from '../../assets/HardLogo.png'
import CartWidget from '../CartWidget/CartWidget'
import {Link} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import { getCategories } from '../../Services/firebase'
import { useEffect, useState } from 'react'

const NavBar = ({product, setProductsFilter}) => {

    const [categories, setCategories] = useState()


    useEffect(() => {
      getCategories().then(categories => {
          setCategories(categories)
      }).catch((error) => {
          console.log(error)
      })
      return () => {
          setCategories()
      }
    }, [])

    return (

        <>

        <div className="divLogo">
            <Link to="/inicio"><img src={logoH} className="logo" alt="logo-tienda"/></Link>
          <CartWidget setProductsFilter={setProductsFilter} product={product}/>
        </div>

        <nav className="navbar navbar-light navbar-expand-lg navMenu">
        <div className="container-fluid">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav lista">
                  <li className="nav-item lista__item linkSponsor">
                    <Link to={`/inicio`} className='Option'>Inicio</Link>
                  </li>
                  <li className="nav-item lista__item linkSponsor">
                    <Link to={`/productos`} className='Option'>Productos</Link>
                  </li>
                {categories?.map(category => 
                  <li className="nav-item lista__item linkSponsor" key={category.id}>
                    <Link key={category.id} to={`/category/${category.name}`} className='Option'>{category.description}</Link>
                  </li>
                )}
                <li className="nav-item lista__item linkSponsor">Marcas Sponsor
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

