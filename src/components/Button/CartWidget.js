import './Widget.css'



const CartWidget = () => {

    return(

        <div className="divCarrito">
            <input type="text" className="filtro" />
            <button type="submit" className="btn-submit">BUSCAR</button>
            <i className="fas fa-shopping-cart"> 0</i>
        </div>
    )
}

export default CartWidget