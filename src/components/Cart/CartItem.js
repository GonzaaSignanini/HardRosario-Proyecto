import React, {useContext} from "react";
import { CartContext } from "../../context/CartContext"
import './Cart.css'

import {
  Typography,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
} from "@material-ui/core";


const CartItem = ({ item }) => {

  const { removeItem } = useContext(CartContext)

  const handleOnClick = () => {
    removeItem(item.id);;
  };

  return (
    <Card className="cardItems">
        <img src={item.pictureUrl} style={{"width": "auto", "height":"220px"}} alt="Cart-Product"/>
      <CardMedia
        image={item.pictureUrl}
        alt={item.title}
      />
      <CardContent contained className="cardContent">
        <Typography variant="h4" className="titleItem" style={{'font-size':'22px'}}>{item.title}</Typography>
        <Typography variant="h5" className="priceItem" style={{'margin-top':'4%', 'font-size':'22px'}}>Precio Unitario: $ {Number(item.price)}
        </Typography>
      </CardContent>
      <CardActions className="cardActions">
        <div className="buttons">
          <Typography variant="h5" className="itemCount"  style={{'text-align':'center'}}>Cantidad: {item.quantity} unidad(es)</Typography>
        </div>
        <div className="box-btn">
          <Button className="btn-remove" variant="contained" type="button" color="secondary" size="large" onClick={handleOnClick}>
            Remover
          </Button>
        </div>
      </CardActions>
    </Card>
  )
};

export default CartItem;