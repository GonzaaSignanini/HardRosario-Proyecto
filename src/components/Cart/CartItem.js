import React, {useState, useContext} from "react";
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


const CartItem = ({ item, setCantidad}) => {

  const {removeItem, changeNavQuantity, navQuantity, changeQuantity, quantity, productsCart} = useContext(CartContext)

  const handleOnClick = () => {
    removeItem(item.id);
    changeQuantity(quantity - item.quantity);
    changeNavQuantity(navQuantity - item.quantity);
  };

  setCantidad(Number(item.price) * Number(item.quantity))


  return (
    <Card className="cardItems">
        <img src={item.pictureUrl} style={{"width": "auto", "height":"250px"}}/>
      <CardMedia
        image={item.pictureUrl}
        alt={item.title}
      />
      <CardContent contained className="cardContent">
        <Typography variant="h4" style={{'font-size':'24px'}}>{item.title}</Typography>
        <Typography variant="h5" style={{'margin-top':'4%', 'font-size':'22px'}}>Precio Unitario: $ {Number(item.price)}
        </Typography>
      </CardContent>
      <CardActions className="cardActions">
        <div className="buttons">
          <Button type="button" size="small">-</Button>
          <Typography>{item.quantity}</Typography>
          <Button type="button" size="small">+</Button>
        </div>
        <Button variant="contained" type="button" color="secondary" onClick={handleOnClick}>
          Remover
        </Button>
      </CardActions>
    </Card>
  )
};

export default CartItem;