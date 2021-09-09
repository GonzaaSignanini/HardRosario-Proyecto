import React, {useState} from 'react';
import './ItemCount.css'


const ItemCount = () => {

    const miStock = 25;
    const [count, setCount] = useState(1);

    const miFuncRestar = () => {
        if(count <= 1){
        }else{
            setCount(count - 1)
        }
    }
    const miFuncSumar = () => {
        if(count >= 12){
        }else{
            setCount(count + 1)
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