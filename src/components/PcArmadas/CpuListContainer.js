import CpuList from './CpuList'
import './style.css'
import { useState, useEffect } from "react";
import { useParams } from 'react-router'




const products = [
    {
        id: "01",
        pictureUrl: 'https://static.wixstatic.com/media/6b8588_a28afd1b39d04d08b6c4bb16610bb4b3~mv2.png/v1/fill/w_446,h_446,al_c,q_85,usm_0.66_1.00_0.01/1.webp',
        alt: "Cpu Armada 1",
        title: "Combo PC Gamer #1",
        price: "260.000",
        stock: 4,
        description: "Aca va descripcion del producto"
    },

    {
        id: "02",
        pictureUrl: 'https://www.mgtecnologia.com.ar/thumb/PC-I5-10400F-RX-570-4GB1620083991561_400x400.jpg',
        alt: "Cpu Armada 2",
        title: "Combo PC Gamer #2",
        price: "155.000",
        stock: 15,
        description: "Aca va descripcion del producto"
    },

    {
        id: "03",
        pictureUrl: 'https://http2.mlstatic.com/D_NQ_NP_990520-MLA43959393680_102020-W.jpg',
        alt: "Cpu Armada 3",
        title: "Combo PC Gamer #3",
        price: "210.000",
        stock: 7,
        description: "Aca va descripcion del producto"
    },
]

const getProduct = (equipoId) => {
    return new Promise((resolve, reject) =>{
        if(!equipoId) setTimeout(() => resolve(products), 2000)
        const product = products.filter(prod =>prod.id === equipoId)
        setTimeout(() => resolve(product), 2000)
    })
}


const CpuListContainer = ({setCartItem}) => {
    
    const {equipoId} = useParams() 

    const [products, setProducts] = useState([]);
    useEffect(() => {
        const list = getProduct(equipoId);
        list.then(list => {
            setProducts(list)
        })
        setProducts()
    }, [equipoId])

    return (

        <div className="List">
            <CpuList products={products} setCartItem={setCartItem}/>
        </div>

    )
}

export default CpuListContainer