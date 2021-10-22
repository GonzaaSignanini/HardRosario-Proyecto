import { useContext } from 'react';
import  { CartContext }  from '../../context/CartContext';
import { Grid, Typography, Button } from '@material-ui/core';
import CartItem from './CartItem'
import { Link } from 'react-router-dom';


const FilledCart = () => { 

  const { productsCart, clear, totalPrice }  = useContext(CartContext);

      return (
        <>
          <Grid container spacing={3}>
          {productsCart?.map((item) => (
            <Grid item xs={12} sm={4} key={item.id}>
              <CartItem
                item={item}
              />
            </Grid>
          ))}
        
        </Grid>
        <div className="cardDetails" style={{"margin-top":"3%"}}>
        <Typography variant="h4">
          Total: $ {totalPrice}
        </Typography>
        <div style={{'margin-top':'2%'}}>
          <Button size="large" type="button" variant="contained" color="secondary" onClick={clear}>Vaciar Carrito</Button>
          <Link to="checkout">
            <Button className="checkoutButton" size="large"  type="button" variant="contained" color="primary" style={{'margin-left':'1.5%'}} >Confirmar Compra</Button>
          </Link>
        </div>
      </div>
      </>
      )    
};

export default FilledCart