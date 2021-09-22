import ItemList from '../ItemList/ItemList'
import {useState, useEffect} from 'react'
import imgUno from '../../assets/ryzen5.jpeg'
import imgDos from '../../assets/rtxGigabyte.png'
import { useParams } from 'react-router'
import Spinner from '../Spinner/Spinner'
import './style.css'

export const products = [
    {
        id: "01",
        pictureUrl: imgUno,
        alt: "Procesador",
        title: "Procesador AMD Ryzen 5 3600x",
        price: "34.200",
        stock: 12
    },

    {
        id: "02",
        pictureUrl: imgDos,
        alt: "GPU",
        title: "Placa de video RTX 2070 Super",
        price: "175.000",
        stock: 3
    },

    {
        id: "03",
        pictureUrl: 'https://www.amd.com/system/files/2020-09/616656-amd-ryzen-9-5000-series-PIB-1260x709_0.png',
        alt: "Procesador",
        title: "Procesador AMD Ryzen 9 5950x",
        price: "112.000",
        stock: 8
    },
]

const getProduct = () => {
    return new Promise((resolve, reject) =>{
         setTimeout(() => resolve(products), 2000)
    })
}




const ItemListContainer = ({setCartItem}) => {

    const {catId} = useParams() 
    const [Loader, setLoader] = useState(true);
    const [products, setProducts] = useState([]);
    useEffect(() => {
        const list = getProduct(catId);
        list.then(list => {
            setProducts(list)
            setLoader(false)
        })
        setProducts()
        
    }, [catId])

    return (

        <div className="List">
            <div className="spinner">
                {Loader === true ? <Spinner/> : <ItemList  products={products} setCartItem={setCartItem}/>}
            </div>
        </div>
        

    )
}

export default ItemListContainer