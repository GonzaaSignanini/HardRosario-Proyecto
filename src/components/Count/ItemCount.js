import React, {useState, useContext, useEffect} from 'react';
import './ItemCount.css'
import { CartContext } from "../../context/CartContext";
import { Button } from '@material-ui/core'

const ItemCount = ({stock, initial, onAdd, setQuantity, item}) => {
    const [count, setCount] = useState(initial);
    const { isInCart, addItem, getProduct } = useContext(CartContext);

    useEffect(() => {
      if (isInCart(item.id)) {
        const oldQuantity = getProduct(item.id)?.quantity;
        setCount(oldQuantity);
      }
      return () => {
        setCount(0);
      };
    }, [item, getProduct, isInCart]);
    
    const incrementar = () => {
      if (count < stock) {
        setCount(count + 1);
      }
    };

    const decrementar = () => {
      if (count > initial) {
        setCount(count - 1);
      }
    };

    const handleOnClick = () => {
      if (count) {
        addItem(item, count);
        setQuantity(count);
        onAdd();
      } 
    };

    return(

        <div className="cardCount">
           <div className="divButtons">
                <Button type="button" size="large" color="secondary" style={{'font-size':'47px', 'height':'50px', 'align-self':'center','margin-right':'7%', 'width':'30px', 'align-items':'center'}}variant="contained"onClick={decrementar}>-</Button>
                <h1 className="numberCount">{count}</h1>
                <Button color="secondary" style={{'font-size':'34px', 'justify-self':'flex-end', 'height':'50px', 'width':'30px', 'align-self':'center','margin-left':'7%'}} variant="contained" onClick={incrementar}>+</Button>
            </div>
            <p className="textStock" style={{'margin-top':'-0.1%', 'font-size':'20px'}}>{count >= item.stock ? 'Stock Máximo!!' : ''}</p>
            <Button type="button" variant="contained" size="large" style={{'width':'250px', 'align-self':'center'}} color="secondary" onClick={handleOnClick}>Añadir al Carrito</Button>
        </div>
        
    )




}


export default ItemCount