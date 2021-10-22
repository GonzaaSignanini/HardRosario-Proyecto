import { useContext, useEffect} from 'react';
import  { CartContext }  from '../../context/CartContext';
import { Container, Typography} from "@material-ui/core";
import MarcaSponsors from '../Marcas/Marcas';
import Footer from '../Footer/Footer';
import FilledCart from './FilledCart';
import EmptyCart from './EmptyCart';

const CartView = () => {

    const { productsCart, getPrice}  = useContext(CartContext);

    useEffect(() => {
      getPrice();
    }, [getPrice]);
      
    return (
      <Container>
        <Typography className="titleCart" variant="h3" gutterBottom>Carrito de Compras</Typography>
        {productsCart <= 0  ? <EmptyCart /> : <FilledCart />  }  
        <MarcaSponsors />
        <Footer />
      </Container>
    )
}

export default CartView