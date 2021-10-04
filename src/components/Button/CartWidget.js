import './Widget.css'
import {Link} from 'react-router-dom'
import { useContext } from 'react';
import { CartContext }  from '../../context/CartContext';

const CartWidget = () => {

    const { navQuantity } = useContext(CartContext);


    return(

        <div className="divCarrito">
            <input type="text" className="filtro" />
            <button type="submit" className="btn-submit">BUSCAR</button>
            {navQuantity > 0 && <div className="cart"> 
            <Link to={`/cart`}>
                <i className="fas fa-shopping-cart"></i>
            </Link>
            <h1 className="number fas">{navQuantity}</h1>
            </div>}
        </div>
    )
}

export default CartWidget