import ItemList from '../ItemList/ItemList'
import '../Count/ItemCount.css'
import {useState, useEffect} from 'react'
import imgUno from '../../assets/ryzen5.jpeg'
import imgDos from '../../assets/rtxGigabyte.png'
import { useParams } from 'react-router'

const products = [
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

const getProduct = (itemId) => {
    return new Promise((resolve, reject) =>{
        if(!itemId) setTimeout(() => resolve(products), 2000)
        const product = products.filter(prod =>prod.id === itemId)
        setTimeout(() => resolve(product), 2000)
    })
}




const ItemListContainer = ({setCartItem}) => {

    const {itemId} = useParams() 
    
    const [products, setProducts] = useState([]);
    useEffect(() => {
        const list = getProduct(itemId);
        list.then(list => {
            setProducts(list)
        })
        setProducts()
    }, [itemId])

    return (

        <div className="List">
            <ItemList products={products} setCartItem={setCartItem}/>
        </div>

    )
}

export default ItemListContainer