import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import CpuListContainer from './components/PcArmadas/CpuListContainer';
import { UserContext } from './context/CartContext';
import { useState } from 'react';
import ItemDetailContainer from './components/ItemDetail/ItemDetailContainer';
import CartView from './components/Cart/Cart';


const App = ({product}) => {

  const [cartItem, setCartItem] = useState(0);

  return (
    
    <div className="App">
      <UserContext.Provider value={'gonzalo'}>
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
            <ItemDetailContainer setCartItem={setCartItem}/>
          </Route>
          <Route path="/equipos-armados/">
            <CpuListContainer />
          </Route>
          <Route path="/combo-gamer/:equipoId">
            <CpuListContainer />
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
      </UserContext.Provider>
    </div>
  );
}

export default App;
