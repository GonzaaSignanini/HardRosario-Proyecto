import {Link} from 'react-router-dom'
import ItemCount from '../Count/ItemCount';
import { useState} from 'react';
import {  Button } from "@material-ui/core";
import './ItemCss.css'
import {Card, CardContent} from '@material-ui/core'


const ItemDetail = ({products}) => {

    const [cart, setCart] = useState(true);
    const [itemCount, setItemCount] = useState();

    const handleOnAdd = () => {
        setCart(false);
    };

    const FinalizarCompra = () => {
        //Aparece el carritto
        const handleOnClick = () => {
          setCart(true);
        };
    
        return (
          <div>
            <Button onClick={handleOnClick} variant="contained">
              Volver
            </Button>
            <Link to="/cart" className="link">
              <Button variant="contained" color="secondary">
                Finalizar Compra
              </Button>
            </Link>
          </div>
        );
    };

    return(
        <Card className="cardd">
          <CardContent className="cardd" > 
            <img style={{'width':'auto', 'height':'270px'}} className="card-img-top imgProduct" src={products?.pictureUrl} alt={products?.alt}/>
            <h1 className="card-title titleProduct">{products?.title}</h1>
            <p className="card-text priceDetail">$ {products?.price}</p>
            <p  className="card-text stockProduct">Stock disponible: {products?.stock}</p>
            {cart ? (
              <ItemCount
                stock={5}
                item={products}
                initial={0}
                onAdd={handleOnAdd}
                setItemCount={setItemCount}
              />
            ) : (
              <FinalizarCompra />
            )}
        </CardContent>
        </Card>         
    )
}


export default ItemDetail