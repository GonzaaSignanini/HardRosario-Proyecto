import React, {useState, useContext} from 'react';
import './ItemCount.css'
import { CartContext } from "../../context/CartContext";
import { Button } from '@material-ui/core'
import NotificationContext from '../../context/NotificationContext'

const ItemCount = ({initial, onAdd, setItemCount, item}) => {
    const { setNotification } = useContext(NotificationContext)
    const [count, setCount] = useState(initial);
    const { quantity, changeQuantity, addItem, productsCart, setProductsCart, changeNavQuantity } =
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
      }  else{
        const newProduct = {
          ...item,
          quantity: count,
        };
    
        productsCart ? addItem([...productsCart, newProduct]) : addItem([newProduct]);
      } 
    
      
      onAdd();
      changeNavQuantity(quantity)
      setNotification('success', `${item.title} ha sido agregado al carrito`)
    };

    return(

        <div className="cardCount">
           <div className="divButtons">
                <Button type="button" size="large" color="secondary" style={{'font-size':'47px', 'height':'50px', 'align-self':'center','margin-right':'7%', 'width':'30px', 'align-items':'center'}}variant="contained"onClick={decrementar}>-</Button>
                <h1 className="numberCount">{count}</h1>
                <Button color="secondary" style={{'font-size':'34px', 'justify-self':'flex-end', 'height':'50px', 'width':'30px', 'align-self':'center','margin-left':'7%'}} variant="contained" onClick={aumentar}>+</Button>
            </div>
            <p className="textStock" style={{'margin-top':'-0.1%', 'font-size':'20px'}}>{count >= item.stock ? 'Stock Máximo!!' : ''}</p>
            <Button type="button" variant="contained" size="large" style={{'width':'250px', 'align-self':'center'}} color="secondary" onClick={handleOnClick}>Añadir al Carrito</Button>
        </div>
        
    )




}


export default ItemCount