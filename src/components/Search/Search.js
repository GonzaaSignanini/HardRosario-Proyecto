import '../CartWidget/Widget.css'
import { useEffect, useState } from 'react'
import { searchProducts, getProducts } from '../../Services/firebase'

const Search = ({setProductsFilter}) => {

    const [products, setProducts] = useState([])
    const [searchField, setSearchField] = useState('')
    
    const handleChange = (e) => {
        setSearchField(e.target.value)
    }
    
    useEffect(() => {
        getProducts().then(product => {
            setProducts(product)
        })
    }, [])

    return (
        <>
            <input type="search" className="filtro" onChange={handleChange} placeholder="Buscar productos..."/>
            <button type="submit" onClick={() => searchProducts(searchField, products, setProductsFilter)} className=" btn-submit">BUSCAR</button>
        </>
    )
}

export default Search