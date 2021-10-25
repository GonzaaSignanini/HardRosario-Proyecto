import Item from '../Item/Item'
import './ItemList.css'
import Spinner from '../Spinner/Spinner'

const ItemList = ({products, setCartItem, productsFilter}) => {


    return(
        <>
            {productsFilter.length === 0 ? 
            
            <div className="product"> 
                {products ? 
                (
                    products.map(product => <Item product={product} key={product.id} setCartItem={setCartItem}/>)
                ) : (
                    <div className="spin">
                        <Spinner />
                    </div>
                )}
            </div>  :

            <div className="product">
                {productsFilter ? 
                (
                    productsFilter.map(producto => <Item product={producto} key={producto.id} setCartItem={setCartItem}/>)
                ) : (
                    <div className="spin">
                        <Spinner />
                    </div>
                )}
            </div>}
        </>
    )
}

export default ItemList