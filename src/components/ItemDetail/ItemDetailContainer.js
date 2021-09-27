import {useState, useEffect} from 'react'
import { useParams } from 'react-router'
import Spinner from '../Spinner/Spinner'
import '../ItemListContainer/style.css'
import imgUno from '../../assets/ryzen5.jpeg'
import imgDos from '../../assets/rtxGigabyte.png'
import ItemDetail from './ItemDetail'

const ItemDetailContainer = () => {

    const getProduct = () => {
        return new Promise((resolve) => {
            const products = [
                {
                    id: "01",
                    pictureUrl: imgUno,
                    alt: "Procesador",
                    title: "Procesador AMD Ryzen 5 3600x",
                    price: "34200",
                    stock: 12
                },
            
                {
                    id: "02",
                    pictureUrl: imgDos,
                    alt: "GPU",
                    title: "Placa de video RTX 2070 Super",
                    price: "175000",
                    stock: 3
                },
            
                {
                    id: "03",
                    pictureUrl: 'https://www.amd.com/system/files/2020-09/616656-amd-ryzen-9-5000-series-PIB-1260x709_0.png',
                    alt: "Procesador",
                    title: "Procesador AMD Ryzen 9 5950x",
                    price: "112000",
                    stock: 8
                },
          ];
          setTimeout(() => {
            resolve(products);
          }, 2000);
        });
      };
    

    const {itemId} = useParams() 
    const [Loader, setLoader] = useState(true);
    const [products, setProducts] = useState(undefined);

    useEffect(() => {
        const list = getProduct(itemId);
        list.then((res) => {
          const product = res.find((prod) => prod.id === itemId);
          setProducts(product);
          setLoader(false)
        });
        return () => {
          setProducts(undefined);
        };
      }, [itemId]);

    return (

        <div className="List">
            <div className="spinner">
                {Loader === true ? <Spinner/> : <ItemDetail  products={products}/>}
            </div>
        </div>
        

    )
}

export default ItemDetailContainer