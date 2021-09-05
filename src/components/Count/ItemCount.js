import React, {useState} from 'react';
import './ItemCount.css'


const ItemCount = () => {

    const miStock = 25;
    const [count, setCount] = useState(1);
    let h1 = document.querySelector('h1.number');

    const miFuncRestar = () => {
        if(count <= 1){
        }else{
            setCount(count - 1)
        }
    }
    const miFuncSumar = () => {
        if(count >= miStock){
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
            <p className="titleItem">Procesador Ryzen 5 3600X</p>
            <p className="titleStock">Stock: {miStock} unidades.</p>
            <div className="divButtons">
                <button className="btnResta" onClick={miFuncRestar}>-</button>
                <h1>{count}</h1>
                <button className="btnSuma" onClick={miFuncSumar}>+</button>
            </div>
            <button className="btnSend" onClick={reset}>Añadir al Carrito</button>
        </div>
        
    )




}


export default ItemCount