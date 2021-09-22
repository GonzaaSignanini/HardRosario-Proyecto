import React, {useState} from 'react';
import './ItemCount.css'


const ItemCount = ({product, setCartItem}) => {
        
    const [quantity, setQuantity] = useState(0);

    const aumentar = () => {
        if (quantity >= product.stock){
            console.log('ya no sumo mas')
         }
         else {
            setQuantity(quantity + 1);
         }
        
    }
    const decrementar = () => {
        if (quantity <= 0){
            console.log('no hago nada')
        }
         else{
            setQuantity(quantity - 1);
         }
      
    }

    const onAdd = () => {
        setCartItem(quantity)
    }

    if(product === undefined){
        return <h3>{`No existe el producto ${product}`}</h3>
    }
    
    return(

        <div className="cardCount">
           <div className="divButtons">
                <button className="btnResta" onClick={decrementar}>-</button>
                <h1 className="numberCount">{quantity}</h1>
                <button className="btnSuma" onClick={aumentar}>+</button>
            </div>
            <p className="textStock">{quantity >= product.stock ? 'Stock Máximo!!' : ''}</p>
            <button className="btnSend" onClick={onAdd}>Añadir al Carrito</button>
        </div>
        
    )




}


export default ItemCount