import React, {useState} from 'react';
import './ItemCount.css'


const ItemCount = ({stock, setCartItem}) => {

    
    const [count, setCount] = useState(0);

    const miFuncRestar = () => {
        if(count === 0){
            return setCount(count - 1)
        }
    }

    const miFuncSumar = () => {
        if(count === stock){
            return setCount(count + 1)
        }
    }

    const reset = () => {
        if(count <= 1){      
        }else{
            setCount(count - (count- 1))
        }
    }
    
    return(

        <div className="cardCount">
            <div className="divButtons">
                <button className="btnResta" onClick={miFuncRestar}>-</button>
                <h1 className="numberCount">{count}</h1>
                <button className="btnSuma" onClick={miFuncSumar}>+</button>
            </div>
            <button className="btnSend" onClick={reset}>Añadir al Carrito</button>
        </div>
        
    )




}


export default ItemCount