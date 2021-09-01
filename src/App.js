import './App.css';
import NavBar from './components/NavBar/NavBar';
import Table from './components/Catalog/ItemListContainer';

const App = () => {


  return (
    
    <div className="App">
      <header className="App-header">
        <NavBar />
      </header>
      <div className="catalogo">
          <Table />
      </div>
    </div>
  );
}

export default App;
