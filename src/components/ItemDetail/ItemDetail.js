import '../Item/Item.css'
import {Link} from 'react-router-dom'
import ItemCount from '../Count/ItemCount';
import { useState, useContext } from 'react';
import  { CartContext }  from '../../context/CartContext';
import {  Button } from "@material-ui/core";
import './ItemCss.css'

const ItemDetail = ({products}) => {

    const { quantity, addItem, isInCart } = useContext(CartContext);
    const [cart, setCart] = useState(true);
    const [itemCount, setItemCount] = useState();

    const handleOnAdd = () => {
        setCart(false);
    };

    const FinalizarCompra = () => {
        //Aparece el carritto
        const handleOnClick = () => {
          setCart(true);
        };
    
        return (
          <div>
            <Button onClick={handleOnClick} variant="contained">
              Volver
            </Button>
            <Link to="/cart" className="link">
              <Button variant="contained" color="secondary">
                Finalizar Compra
              </Button>
            </Link>
          </div>
        );
    };

    return(

        <div className="card card-body">
            <img className="card-img-top imgProduct" src={products?.pictureUrl} alt={products?.alt}/>
            <h1 className="card-title titleProduct">{products?.title}</h1>
            <p className="card-text priceProduct">${products?.price}</p>
            <p className="card-text stockProduct">Stock disponible: {products?.stock}</p>
            {cart ? (
              <ItemCount
                stock={5}
                item={products}
                initial={0}
                onAdd={handleOnAdd}
                setItemCount={setItemCount}
              />
            ) : (
              <FinalizarCompra />
            )}
        </div>

    )
}


export default ItemDetail