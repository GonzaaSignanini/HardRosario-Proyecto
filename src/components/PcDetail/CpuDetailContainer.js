import CpuDetailList from './CpuDetailList'
import {useState, useEffect} from 'react'
import { useParams } from 'react-router'
import Spinner from '../Spinner/Spinner'
import '../PcArmadas/style.css'
import { products } from '../PcArmadas/CpuListContainer'

const getProduct = (itemEquipId) => {
    return new Promise((resolve, reject) =>{
        if(!itemEquipId) setTimeout(() => resolve(products), 2000)
        const product = products.filter(prod =>prod.id === itemEquipId)
        setTimeout(() => resolve(product), 2000)
    })
}


const CpuDetailContainer = ({setCartItem}) => {

    const {itemEquipId} = useParams() 
    const [Loader, setLoader] = useState(true);
    const [products, setProducts] = useState([]);
    useEffect(() => {
        const list = getProduct(itemEquipId);
        list.then(list => {
            setProducts(list)
            setLoader(false)
        })
        setProducts()
        
    }, [itemEquipId])

    return (

        <div className="List">
            <div className="spinner">
                {Loader === true ? <Spinner/> : <CpuDetailList  products={products} setCartItem={setCartItem}/>}
            </div>
        </div>
        

    )
}

export default CpuDetailContainer