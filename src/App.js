import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';


const App = () => {


  return (
    
    <div className="App">
      <header className="App-header">
        <NavBar />
      </header>
      <div className="catalogo">
          <ItemListContainer greeting="Bienvenidos a Hard Rosario! La mejor tienda de HardWare de PC de la provincia de Santa Fe."/>
      </div>
      <div style={{height: "200px"}}>

      </div>
    </div>
  );
}

export default App;
