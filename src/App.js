import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetail/ItemDetailContainer';
import CartView from './components/Cart/Cart';
import { CartContextProvider } from './context/CartContext';
import Home from './components/Home/Home';
import Checkout from './components/Checkout/Checkout/Checkout';


const App = ({product}) => {

  return (
    
    <div className="App">
        <CartContextProvider>
          <BrowserRouter>
            <header className="App-header">
              <NavBar products={product} />
            </header>
            <Switch>
              <Route exact path="/inicio">
                <Home />
              </Route>
              <Route path="/productos">
                <ItemListContainer/>
              </Route>
              <Route exact path="/producto/:catId/:itemId">
                <ItemDetailContainer />
              </Route>
              <Route path="/category/:catId">
                <ItemListContainer />
              </Route>
              <Route path="/checkout">
                <Checkout />
              </Route>
              <Route path="/cart">
                <CartView />
              </Route>
              <Home greeting="Bienvenidos a Hard Rosario! La mejor tienda de HardWare de PC"/>
            </Switch>
          </BrowserRouter>
        </CartContextProvider>
    </div>
  );
}

export default App;
