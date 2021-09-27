import '../PcArmadas/style.css'
import {Link} from 'react-router-dom'
import ItemCount from '../Count/ItemCount';


const CpuDetail = ({product, setCartItem}) => {

    return(

        <div className="card card-body">
            <Link to={`/producto/${product.id}`}><img className="card-img-top imgProduct" src={product?.pictureUrl} alt={product?.alt}/></Link>
            
            <h1 className="card-title titleProduct">{product?.title}</h1>
            <p className="card-text priceProduct">${product?.price}</p>
            <p className="card-text stockProduct">Stock disponible: {product?.stock}</p>
            <p className="descriptionProduct">{product.description}</p>
            <ItemCount product={product} setCartItem={setCartItem}/>
        </div>

    )
}


export default CpuDetail