import logo from './logo.svg';
import './App.css';
import './components/navbar/NavBar'
import NavBar from './components/navbar/NavBar';

const App = () => {


  return (
    
    <div className="App">
      <header className="App-header">
        <NavBar></NavBar>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
