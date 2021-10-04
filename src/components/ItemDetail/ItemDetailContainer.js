import {useState, useEffect} from 'react'
import { useParams } from 'react-router'
import Spinner from '../Spinner/Spinner'
import '../ItemListContainer/style.css'
import ItemDetail from './ItemDetail'
import { db } from '../Services/firebase'
import { doc, getDoc } from '@firebase/firestore'

const ItemDetailContainer = () => {
    

    const {itemId} = useParams() 
    const [Loader, setLoader] = useState(true);
    const [products, setProducts] = useState(undefined);

    useEffect(() => {
      setLoader(true)
        getDoc(doc(db, 'productos' , itemId)).then((querySnapshot) => {
            console.log({id: querySnapshot.id, ...querySnapshot.data()})
            const product = { id: querySnapshot.id, ...querySnapshot.data()}
            setProducts(product)
        }).catch((error) => {
            console.log('Error searching intems', error)
        }).finally(() => {
            setLoader(false)
        })
        return (() => {
            setProducts(undefined)
        })
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