import DetailList from './DetailList'
import {useState, useEffect} from 'react'
import imgUno from '../../assets/ryzen5.jpeg'
import imgDos from '../../assets/rtxGigabyte.png'
import { useParams } from 'react-router'
import Spinner from '../Spinner/Spinner'
import '../ItemListContainer/style.css'
import { products } from '../ItemListContainer/ItemListContainer'

const getProduct = (itemId) => {
    return new Promise((resolve, reject) =>{
        if(!itemId) setTimeout(() => resolve(products), 2000)
        const product = products.filter(prod =>prod.id === itemId)
        setTimeout(() => resolve(product), 2000)
    })
}


const ItemDetailContainer = ({setCartItem}) => {

    const {itemId} = useParams() 
    const [Loader, setLoader] = useState(true);
    const [products, setProducts] = useState([]);
    useEffect(() => {
        const list = getProduct(itemId);
        list.then(list => {
            setProducts(list)
            setLoader(false)
        })
        setProducts()
        
    }, [itemId])

    return (

        <div className="List">
            <div className="spinner">
                {Loader === true ? <Spinner/> : <DetailList  products={products} setCartItem={setCartItem}/>}
            </div>
        </div>
        

    )
}

export default ItemDetailContainer