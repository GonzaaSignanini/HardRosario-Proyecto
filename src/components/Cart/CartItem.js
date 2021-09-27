import React, {useState, useContext} from "react";
import { CartContext } from "../../context/CartContext"

import {
  Typography,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
} from "@material-ui/core";


const CartItem = ({ item, setCantidad}) => {
  const [cantidadItem, setCantidadItem] = useState(item.quantity)
  const {removeItem} = useContext(CartContext)


  setCantidad(Number(item.price) * Number(item.quantity))

  return (
    <Card>
        <img src={item.pictureUrl} style={{"width": "370px", "height":"230px"}}/>
      <CardMedia
        image={item.pictureUrl}
        alt={item.title}
      />
      <CardContent ntent className="cardContent">
        <Typography variant="h4" style={{'font-size':'24px'}}>{item.title}</Typography>
        <Typography variant="h5" style={{'margin-top':'3%'}}> $
          {Number(item.price) * Number(item.quantity)}
        </Typography>
      </CardContent>
      <CardActions className="cardActions">
        <div className="buttons">
          <Button type="button" size="small" onClick={() => setCantidadItem(Number(item.quantity) + 1)}>
            -
          </Button>
          <Typography>{item.quantity}</Typography>
          <Button type="button" size="small" onClick={() => setCantidadItem(Number(item.quantity) + 1)}>
            +
            </Button>
        </div>
        <Button variant="contained" type="button" color="secondary" onClick={() => removeItem(item.id)}>
          Remover
        </Button>
      </CardActions>
    </Card>
  );
};

export default CartItem;