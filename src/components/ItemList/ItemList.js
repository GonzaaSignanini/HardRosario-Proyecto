import Item from '../Item/Item'
import './ItemList.css'
import Spinner from '../Spinner/Spinner'

const ItemList = ({products, setCartItem}) => {


    return(

        <div className="product"> 
            {products ? 
            (
                products.map(product => <Item product={product} key={product.id} setCartItem={setCartItem}/>)
            ) : (
                <div className="spin">
                    <Spinner />
                </div>
            )}

        </div>
    )
}

export default ItemList