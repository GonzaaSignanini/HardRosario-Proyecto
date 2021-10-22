import {useState, useEffect} from 'react'
import { useParams } from 'react-router'
import Spinner from '../Spinner/Spinner'
import '../ItemListContainer/style.css'
import ItemDetail from './ItemDetail'
import { getProductById } from '../../Services/firebase'
import MarcaSponsors from '../Marcas/Marcas'
import Footer from '../Footer/Footer'

const ItemDetailContainer = () => {
    

    const {itemId} = useParams() 
    const [Loader, setLoader] = useState(true);
    const [products, setProducts] = useState(undefined);

    useEffect(() => {
      setLoader(true)
        getProductById(itemId).then(product => {
            setProducts(product)
        }).catch((error) => {
            console.log(error)
        }).finally(() => {
            setLoader(false)
        })
        return (() => {
            setLoader(true)
            setProducts(undefined)
        })
    }, [itemId]);

    return (

        <div className="List">
            <div className="spinner">
                {Loader === true ? <Spinner/> : <ItemDetail  products={products}/>}
            </div>
            <MarcaSponsors />
            <Footer />
        </div>
    )
}

export default ItemDetailContainer