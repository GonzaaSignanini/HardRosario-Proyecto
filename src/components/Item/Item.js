import './Item.css'
import {Link} from 'react-router-dom'
import '../Count/ItemCount.css'
import { Button } from '@material-ui/core'


const Item = ({product}) => {

    return(

        <div className="card card-body">
            <img className="card-img-top imgProduct" src={product?.pictureUrl} alt={product?.alt}/>
            <h1 className="card-title titleProduct">{product?.title}</h1>
            <p className="card-text priceProduct">$ {product?.price}</p>
            <Link to={`/producto/${product.id}`} className="link">
                <Button size="large" variant="contained" color="secondary">Ver Detalle de Producto</Button>
            </Link>
        </div>

    )
}


export default Item