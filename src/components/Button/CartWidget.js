import './Widget.css'




const CartWidget = () => {

    return(

        <div className="divCarrito">
            <input type="text" className="filtro" />
            <button type="submit" className="btn-submit">BUSCAR</button>
            <i className="fas fa-shopping-cart"></i>
            <h1 className="number fas">0</h1>

        </div>
    )
}

export default CartWidget