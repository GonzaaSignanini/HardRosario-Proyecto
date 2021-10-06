import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import  {CartContext}  from '../../context/CartContext';
import { Container, Typography, Button, Grid } from "@material-ui/core";
import CartItem from './CartItem';
import { collection, addDoc, getDoc, doc , Timestamp, writeBatch } from 'firebase/firestore'
import { db } from '../Services/firebase'
import NotificationContext from '../../context/NotificationContext'

const CartView = () => {

    const { productsCart }  = useContext(CartContext);
    const { clear }  = useContext(CartContext);
    const [cantidad, setCantidad] = useState();
    const [processingOrder, setProcessingOrder] = useState(false)
    const { setNotification } = useContext(NotificationContext)
    
    const totalPrice = productsCart.map(
      (itemCart) => itemCart.price * itemCart.quantity
    );
    let total = totalPrice.reduce((a, b) => a + b, 0);

    const confirmOrder = () => {
      setProcessingOrder(true)

      const objOrder = {
          products: productsCart,
          total: total,
          date: Timestamp.fromDate(new Date())
      }

      const batch = writeBatch(db)
      const outOfStock = []
          
      objOrder.products.forEach((prod, i) => {
          getDoc(doc(db, 'productos', prod.id)).then(DocumentSnapshot => {
              if(DocumentSnapshot.data().stock >= objOrder.products[i].quantity) {
                  batch.update(doc(db, 'productos', DocumentSnapshot.id), {
                      stock: DocumentSnapshot.data().stock - objOrder.products[i].quantity
                  })
              } else {
                  outOfStock.push({...DocumentSnapshot.data(), id: DocumentSnapshot.id})
              }
                  
          })
      })

      if(outOfStock.length === 0) {
          addDoc(collection(db, 'orders'), objOrder).then(() => {
              batch.commit().then(() => {
              setNotification('success', 'La orden se ejecuto con exito')
              })
          }).catch((error) => {
              setNotification('error','Error al ejecutar la orden')
          }).finally(() => {
              setProcessingOrder(false)
              clear()
          })
      }
  }

    const FilledCart = () => (
        <>
          {!processingOrder && productsCart.length > 0 && <Grid container spacing={3}>
            {productsCart?.map((item) => (
              <Grid item xs={12} sm={4} key={item.id}>
                <CartItem
                  item={item}
                  setCantidad={setCantidad}
                  setNotification={setNotification}
                />
              </Grid>
            ))}
          </Grid>}
          <div className="cardDetails" style={{"margin-top":"3%"}}>
            <Typography variant="h4">
              Total: $ {total}
            </Typography>
            <div style={{'margin-top':'2%'}}>
              {!processingOrder && productsCart.length > 0 && <Button size="large" type="button" variant="contained" color="secondary" onClick={clear}>Vaciar Carrito</Button>}

              {!processingOrder && productsCart.length > 0 && <Button className="checkoutButton"  size="large"  type="button" variant="contained" color="primary" style={{'margin-left':'1.5%'}} onClick={() => confirmOrder()}>Confirmar Compra</Button>}
            </div>
          </div>
        </>
      );
    
    
      const EmptyCart = () => (
        <>
          <Typography variant="subtitle1" style={{'font-size':'22px', 'display':'inline-flex', 'margin-top':'2%'}}>No hay productos en el carrito</Typography>   
          <Link to="/productos" className="link" style={{'margin-left':'12px'}}>
            <Button type="button" variant="contained" color="primary" style={{'margin-top':'-0.2%'}}>Comprar Productos</Button>
          </Link>
        </>
      );
    
      return (
        <Container>
        <Typography className="title" variant="h3" gutterBottom>Carrito de Compras</Typography>
        
        {!processingOrder && productsCart <= 0  ? <EmptyCart /> : <FilledCart />  }  
      </Container>
      )
}

export default CartView