import React, {useState, useContext} from 'react';
import './ItemCount.css'
import { CartContext } from "../../context/CartContext";


const ItemCount = ({products, initial, onAdd, setItemCount, item}) => {

    const [count, setCount] = useState(initial);
    const { quantity, changeQuantity, addItem, productsCart, setProductsCart } =
    useContext(CartContext);

    setItemCount(count);
    
    const aumentar = () => {
        if (count < item.stock){
            setCount(count + 1);
            changeQuantity(quantity + 1);
        }
    }
    const decrementar = () => {
        if (count > 0){
            setCount(count - 1);
            changeQuantity(quantity - 1);
        }
    }

    const handleOnClick = () => {
        const productsCartId = productsCart?.map(item=> item.id)
    
      if (productsCartId?.includes(item.id)) {
      const updateCart = productsCart?.map (i => {
          if (i.id === item.id){
         
            let oldQuantity = i.quantity
            return{
              ...i,
              quantity: count + oldQuantity
            }
          }else{
            return i
          }
      })
      setProductsCart(updateCart)
      }  else{const newProduct = {
        ...item,
        quantity: count,
      };
    
      productsCart
        ? addItem([...productsCart, newProduct])
        : addItem([newProduct]);
    } 
    
      
        onAdd();
      };

    return(

        <div className="cardCount">
           <div className="divButtons">
                <button className="btnResta" onClick={decrementar}>-</button>
                <h1 className="numberCount">{count}</h1>
                <button className="btnSuma" onClick={aumentar}>+</button>
            </div>
            <p className="textStock">{count >= item.stock ? 'Stock Máximo!!' : ''}</p>
            <button className="btnSend" onClick={handleOnClick}>Añadir al Carrito</button>
        </div>
        
    )




}


export default ItemCount