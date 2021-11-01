import './Widget.css'
import {Link} from 'react-router-dom'
import { useContext } from 'react';
import { CartContext }  from '../../context/CartContext';
import  Search  from '../Search/Search';

const CartWidget = ({setProductsFilter}) => {

    const { getQuantity } = useContext(CartContext);

    return(

        <div className="divCarrito">
            <Search setProductsFilter={setProductsFilter}/>
            <div className="cart"> 
                <Link className="linkCart" to={`/cart`}>
                    <i className="cartIcon fas fa-shopping-cart"></i>
                </Link> 
                {getQuantity() > 0 && <h1 className="number fas">{getQuantity()}</h1>}
            </div>
        </div>
    )
}

export default CartWidget