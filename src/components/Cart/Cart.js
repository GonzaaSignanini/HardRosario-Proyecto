import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import  {CartContext}  from '../../context/CartContext';
import { Container, Typography, Button, Grid } from "@material-ui/core";
import CartItem from './CartItem';

const CartView = () => {

    const {productsCart}  = useContext(CartContext);
    const {clear}  = useContext(CartContext);
    const [cantidad, setCantidad] = useState()

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
              Total: $ {cantidad} (en construcción 😬 )
            </Typography>
            <div style={{'margin-top':'2%'}}>
              <Button
                className="emptyButton"
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
        <Typography variant="subtitle1">
          Tu carrito está vacío,   
           <Link to="/" style={{'margin-left':'12px'}}>
             agrega productos
          </Link>
          !
        </Typography>
      );
    
      return (
        <Container>
        <div className="toolbar" />
        <Typography className="title" variant="h3" gutterBottom>
          Carrito de Compras
        </Typography>
        {productsCart ? <FilledCart /> : <EmptyCart />  }
        
      </Container>
      )
}

export default CartView