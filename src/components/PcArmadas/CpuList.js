import Cpu from './Cpu'
import './style.css'


const CpuList = ({products, setCartItem}) => {


    return(

        <div className="product">
            {products ? 
            (
                products?.map(product => <Cpu product={product} key={product.id} setCartItem={setCartItem}/>)
            ) : (
                <div>LOADING</div>
            )}
        </div>
    )
}

export default CpuList