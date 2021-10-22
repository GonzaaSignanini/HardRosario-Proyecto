import './Widget.css'
import {Link} from 'react-router-dom'
import { useContext } from 'react';
import { CartContext }  from '../../context/CartContext';

const CartWidget = () => {

    const { getQuantity } = useContext(CartContext);

    return(

        <div className="divCarrito">
            <input type="search" className="filtro" />
            <button type="submit" className=" btn-submit">BUSCAR</button>
            <div className="cart"> 
            <Link className="linkCart" to={`/cart`}>
                <i className="fas fa-shopping-cart"></i>
            </Link> 
            {getQuantity() > 0 && <h1 className="number fas">{getQuantity()}</h1>}
            </div>
        </div>
    )
}

export default CartWidget