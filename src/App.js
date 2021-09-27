import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import CpuListContainer from './components/PcArmadas/CpuListContainer';
import { useState } from 'react';
import ItemDetailContainer from './components/ItemDetail/ItemDetailContainer';
import CartView from './components/Cart/Cart';
import CpuDetailContainer from './components/PcDetail/CpuDetailContainer';
import { CartContextProvider } from './context/CartContext';


const App = ({product}) => {

  const [cartItem, setCartItem] = useState(0);

  return (
    
    <div className="App">
    <CartContextProvider>
      <BrowserRouter>
        <header className="App-header">
          <NavBar products={product} cartItem={cartItem}/>
        </header>
        <Switch>
          <Route exact path="/inicio/:id">
            Aca van los sponsors.
          </Route>
          <Route path="/productos/:catId">
            <ItemListContainer />
          </Route>
          <Route exact path="/producto/:itemId">
            <ItemDetailContainer />
          </Route>
          <Route path="/equipos-armados/:equipoId">
            <CpuListContainer />
          </Route>
          <Route path="/combo-gamer/:itemEquipId">
            <CpuDetailContainer setCartItem={setCartItem}/>
          </Route>
          <Route path="/contacto/:id">
            Aca va form de contacto
          </Route>
          <Route path="/cart">
            <CartView />
          </Route>
        <div className="catalogo">
            <ItemListContainer greeting="Bienvenidos a Hard Rosario! La mejor tienda de HardWare de PC"/>
        </div>
        </Switch>
        <div style={{height: "200px"}}>

        </div>
      </BrowserRouter>
      </CartContextProvider>

    </div>
  );
}

export default App;
