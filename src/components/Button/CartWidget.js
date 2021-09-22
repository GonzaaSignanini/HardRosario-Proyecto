import './Widget.css'
import {Link} from 'react-router-dom'




const CartWidget = ({cartItem}) => {

    return(

        <div className="divCarrito">
            <input type="text" className="filtro" />
            <button type="submit" className="btn-submit">BUSCAR</button>
            <div className="cart">
                <Link to={`/cart`}>
                    <i className="fas fa-shopping-cart"></i>
                </Link>
                <h1 className="number fas">{cartItem}</h1>
            </div>
            

        </div>
    )
}

export default CartWidget