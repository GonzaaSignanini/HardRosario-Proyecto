import ItemDetail from './ItemDetail'
import '../ItemList/ItemList.css'
import Spinner from '../Spinner/Spinner'

const DetailList = ({products, setCartItem}) => {


    return(

        <div className="product"> 
            {products ? 
            (
                products?.map(product => <ItemDetail product={product} key={product.id} setCartItem={setCartItem}/>)
            ) : (
                <div className="spin">
                    <Spinner />
                </div>
            )}

        </div>
    )
}

export default DetailList