import ItemList from '../ItemList/ItemList'
import {useState, useEffect} from 'react'
import { useParams } from 'react-router'
import Spinner from '../Spinner/Spinner'
import './style.css'
import { db } from '../Services/firebase'
import { collection, getDocs, query, where } from '@firebase/firestore'

const ItemListContainer = ({setCartItem}) => {
    const {catId} = useParams() 
    const [loader, setLoader] = useState(true);
    const [products, setProducts] = useState([]);


    useEffect(() => {
        if(!catId){
            setLoader(true)
            getDocs(collection(db, 'productos')).then((querySnapshot) => {
                const product = querySnapshot.docs.map(doc => {
                    return { id: doc.id, ... doc.data() }
                })
                setProducts(product)
            }).catch((error) => {
                console.log('Error searching products', error)
            }).finally(() => {
                setLoader(false)
            })
        }else {
            setLoader(true)
            getDocs(query(collection(db, 'productos'), where('category', '==', catId))).then((querySnapshot) => {
                const product = querySnapshot.docs.map(doc => {
                    return { id: doc.id, ... doc.data() }
                })
                setProducts(product)
            }).catch((error) => {
                console.log('Error searching products', error)
            }).finally(() => {
                setLoader(false)
            })
        }            
    }, [catId])

    return (

        <div className="List">
            <div className="spinner">
                {loader === true ? <Spinner/> : <ItemList  products={products} setCartItem={setCartItem}/>}
            </div>
        </div>
        

    )
}

export default ItemListContainer