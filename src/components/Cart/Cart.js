import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import  {CartContext}  from '../../context/CartContext';
import { Container, Typography, Button, Grid } from "@material-ui/core";
import CartItem from './CartItem';

const CartView = () => {

    const { productsCart }  = useContext(CartContext);
    const { clear }  = useContext(CartContext);
    const [cantidad, setCantidad] = useState();

    const totalPrice = productsCart.map(
      (itemCart) => itemCart.price * itemCart.quantity
    );
  
    let total = totalPrice.reduce((a, b) => a + b, 0);

    const FilledCart = () => (
        <>
          <Grid container spacing={3}>
            {productsCart?.map((item) => (
              <Grid item xs={12} sm={4} key={item.id}>
                <CartItem
                  item={item}
                  setCantidad={setCantidad}
                />
              </Grid>
            ))}
          </Grid>
          <div className="cardDetails" style={{"margin-top":"3%"}}>
            <Typography variant="h4">
              Total: $ {total}
            </Typography>
            <div style={{'margin-top':'2%'}}>
              <Button
                size="large"
                type="button"
                variant="contained"
                color="secondary"
                onClick={clear}
                
              >
                Vaciar Carrito
              </Button>
              <Button
                component={Link}
                to="/checkout"
                className="checkoutButton"
                size="large"
                type="button"
                variant="contained"
                color="primary"
                style={{'margin-left':'1.5%'}}
              >
                Pagar
              </Button>
            </div>
          </div>
        </>
      );
    
    
      const EmptyCart = () => (
        <>
          <Typography variant="subtitle1" style={{'font-size':'22px', 'display':'inline-flex', 'margin-top':'2%'}}>
            No hay productos en el carrito
          </Typography>   
          <Link to="/productos" className="link" style={{'margin-left':'12px'}}>
            <Button type="button" variant="contained" color="primary" style={{'margin-top':'-0.2%'}}>Comprar Productos</Button>
          </Link>
        </>
      );
    
      return (
        <Container>
        <div className="toolbar" />
        <Typography className="title" variant="h3" gutterBottom>
          Carrito de Compras
        </Typography>
        {productsCart <= 0  ? <EmptyCart /> : <FilledCart />  }
        
      </Container>
      )
}

export default CartView