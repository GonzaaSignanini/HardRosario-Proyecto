import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/Catalog/ItemListContainer';
import ItemCount from './components/Count/ItemCount';

const App = () => {


  return (
    
    <div className="App">
      <header className="App-header">
        <NavBar />
      </header>
      <div className="catalogo">
          <ItemListContainer greeting="Bienvenidos a Hard Rosario! La mejor tienda de HardWare de PC de la provincia de Santa Fe."/>

          <ItemCount />
      </div>
    </div>
  );
}

export default App;
