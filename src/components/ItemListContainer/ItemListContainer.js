import ItemList from '../ItemList/ItemList'
import './Table.css'
import {useState, useEffect} from 'react'
import imgUno from '../../assets/ryzen5.jpeg'
import imgDos from '../../assets/rtxGigabyte.png'

const products = [
    {
        id: "01",
        pictureUrl: imgUno,
        title: "Procesador AMD Ryzen 5 3600x",
        price: 34200,
        stock: 12
    },

    {
        id: "02",
        pictureUrl: imgDos,
        title: "Placa de video RTX 2070 Super",
        price: 175000,
        stock: 12
    }
]

function getProduct() {
    return new Promise((resolve, reject) =>{
        setTimeout(() => resolve(products), 2000)
    })
}


const ItemListContainer = () => {

    const [products, setProducts] = useState([]);
    useEffect(() => {
        const list = getProduct();
        console.log(list)
        list.then(list => {
            setProducts(list)
        })
    }, [products])

    return (

        <div className="List">
            <ItemList products={products}/>
        </div>

    )
}

export default ItemListContainer