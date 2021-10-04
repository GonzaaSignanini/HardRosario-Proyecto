import { Link } from "react-router-dom";
import './style.css'



const Cpu = ({product}) => {

    return(

        <div className="card card-body">
            <img className="card-img-top imgProduct" src={product?.pictureUrl} alt={product?.alt}/>
            <h1 className="card-title titleProduct">{product?.title}</h1>
            <p className="card-text priceProducto">${product?.price}</p>
            <Link to={`/combo-gamer/${product.id}`}>
                <button className="btnDetalle">Ver Detalle de Producto</button>
            </Link>
        </div>

    )
}


export default Cpu