import CpuDetail from './CpuDetail'
import '../PcArmadas/style.css'
import Spinner from '../Spinner/Spinner'

const CpuDetailList = ({products, setCartItem}) => {


    return(

        <div className="product"> 
            {products ? 
            (
                products?.map(product => <CpuDetail product={product} key={product.id} setCartItem={setCartItem}/>)
            ) : (
                <div className="spin">
                    <Spinner />
                </div>
            )}

        </div>
    )
}

export default CpuDetailList