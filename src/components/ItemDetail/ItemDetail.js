import {Link} from 'react-router-dom'
import ItemCount from '../Count/ItemCount';
import { useState} from 'react';
import {  Button } from "@material-ui/core";
import './ItemCss.css'
import {Card, CardContent} from '@material-ui/core'


const ItemDetail = ({products}) => {

    const [quantity, setQuantity] = useState(0)
    const [cart, setCart] = useState(true);

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
            <Link to="/productos" className="link">
              <Button onClick={handleOnClick} variant="contained" color="primary">
                Volver
              </Button>
            </Link>
            <Link to="/cart" className="link">
              <Button variant="contained" color="secondary">
                Finalizar Compra
              </Button>
            </Link>
          </div>
        );
    };

    return(
      <>
        <Card className="cardd">
          <CardContent className="cardd" > 
            <img className="card-img-top imgProduct" src={products?.pictureUrl} alt={products?.alt}/>
            <h1 className="card-title titleProduct">{products?.title}</h1>
            <p className="card-text priceDetail">$ {products?.price}</p>
            <p  className="card-text stockProduct">Stock disponible: {products?.stock}</p>
            {cart ? (
              <ItemCount
                stock={products.stock}
                item={products}
                initial={0}
                onAdd={handleOnAdd}
                setQuantity={setQuantity}
              />
            ) : (
              <FinalizarCompra />
            )}
        </CardContent>
        </Card>   
          <div className="info">
              <p className="span">{products?.span1}</p>
              <p  className="span">{products?.span2}</p>
              <p  className="span">{products?.span3}</p>
              <p  className="span">{products?.span4}</p>
              <p  className="span">{products?.span5}</p>
              <p  className="span">{products?.span6}</p>
              <p  className="span">{products?.span7}</p>
              <p  className="span">{products?.span8}</p>
              <p  className="span">{products?.span9}</p>
        </div>
      </>
    )
}


export default ItemDetail