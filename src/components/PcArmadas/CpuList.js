import Cpu from './Cpu'
import './style.css'


const CpuList = ({products, setCartItem}) => {


    return(

        <div className="product">
            {products?.map(product => <Cpu product={product} key={product.id} setCartItem={setCartItem}/>)}
        </div>
    )
}

export default CpuList