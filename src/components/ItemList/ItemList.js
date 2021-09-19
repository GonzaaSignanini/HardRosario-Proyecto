import Item from '../Item/Item'
import './ItemList.css'

const ItemList = ({products, setCartItem}) => {


    return(

        <div className="product"> 
            {products ? 
            (
                products?.map(product => <Item product={product} key={product.id} setCartItem={setCartItem}/>)
            ) : (
                <div>LOADING</div>
            )}

        </div>
    )
}

export default ItemList