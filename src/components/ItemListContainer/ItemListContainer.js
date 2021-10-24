import ItemList from '../ItemList/ItemList'
import {useState, useEffect} from 'react'
import { useParams } from 'react-router'
import Spinner from '../Spinner/Spinner'
import './style.css'
import { getProducts } from '../../Services/firebase'
import MarcaSponsors from '../Marcas/Marcas'
import Footer from '../Footer/Footer'


const ItemListContainer = ({setCartItem}) => {
    const {catId} = useParams()
    const {subCatId} = useParams() 
    const [loader, setLoader] = useState(true);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        setLoader(true)
        getProducts('category', '==', catId).then(products => {
            setProducts(products)
        }).catch((error) => {
            console.log(error)
        }).finally(() => {
            setLoader(false)
        })
        return(() => {
            setLoader(true)
            setProducts([])
        })
    }, [catId])

    // useEffect(() => {
    //     setLoader(true)
    //     getProducts('subcategory', '==', subCatId).then(products => {
    //         setProducts(products)
    //     }).catch((error) => {
    //         console.log(error)
    //     }).finally(() => {
    //         setLoader(false)
    //     })
    //     return(() => {
    //         setLoader(true)
    //         setProducts([])
    //     })
    // }, [subCatId])

    return (

        <div className="List">
            <div className="spinner">
                {loader === true ? <Spinner/> : <ItemList  products={products} setCartItem={setCartItem}/>}
            </div>

            <MarcaSponsors />
            <Footer />
        </div>
    )
}

export default ItemListContainer