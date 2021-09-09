import ItemCount from '../Count/ItemCount'
import './Item.css'


const Item = ({product}) => {

    

    return(

        <div className="card card-body">
            <img className="card-img-top imgProduct" src={product.pictureUrl}/>
            <h1 className="card-title titleProduct">{product.title}</h1>
            <p className="card-text priceProduct">${product.price}</p>
            <p className="card-text stockProduct">Stock disponible: {product.stock}</p>
            <ItemCount />
        </div>

    )
}


export default Item