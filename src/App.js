import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import CpuListContainer from './components/PcArmadas/CpuListContainer';


const App = ({product}) => {

  return (
    
    <div className="App">
      <BrowserRouter>
        <header className="App-header">
          <NavBar products={product}/>
        </header>
        <Switch>
          <Route exact path="/inicio/:id">
            Aca van los sponsors.
          </Route>
          <Route path="/productos/:id">
            <ItemListContainer />
          </Route>
          <Route exact path="/producto/:itemId">
            <ItemListContainer />
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

          </Route>
        <div className="catalogo">
            <ItemListContainer greeting="Bienvenidos a Hard Rosario! La mejor tienda de HardWare de PC"/>
        </div>
        </Switch>
        <div style={{height: "200px"}}>

        </div>
        

      </BrowserRouter>
    </div>
  );
}

export default App;
