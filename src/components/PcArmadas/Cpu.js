import { useState } from "react";
import { Link } from "react-router-dom";
import './style.css'



const Cpu = ({product}) => {

    const [count, setCount] = useState(0);

    const aumentar = () => {
        if (count >= product.stock){
            console.log('ya no sumo mas')
         }
         else {
             setCount(count + 1);
         }
        
    }
    const decrementar = () => {
        if (count <= 0){
            console.log('no hago nada')
        }
         else{
             setCount(count - 1);
         }
      
    }

    const reset = () => {
        if(count <= 0){      
        }else{
            setCount(count - count)
        }
    }

    

    return(

        <div className="card card-body">
            <Link to={`/combo-gamer/${product.id}`}><img className="card-img-top imgProduct" src={product?.pictureUrl} alt={product?.alt}/></Link>
            
            <h1 className="card-title titleProduct">{product?.title}</h1>
            <p className="card-text priceProduct">${product?.price}</p>
            <p className="card-text stockProduct">Stock disponible: {product?.stock}</p>
            <p className="descriptionProduct">{product.description}</p>
            <div className="divButtons">
                <button className="btnResta" onClick={decrementar}>-</button>
                <h1 className="numberCount">{count}</h1>
                <button className="btnSuma" onClick={aumentar}>+</button>
            </div>
            <p className="textStock">{count >= product.stock ? 'Stock Máximo!!' : ''}</p>
            <button className="btnSend" onClick={reset}>Añadir al Carrito</button>
        </div>

    )
}


export default Cpu