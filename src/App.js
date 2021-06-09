import logo from './utils/images/logo.svg';
import './App.css';
import Footer from './components/Footer';
import Todo from './components/Todo';
import Cuerpo from './components/Cuerpo';
import Tittle from './components/Tittle';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hola, Aura está modificando en react 
        </p> 
      </header>
      <Tittle/>
      <Todo/>
      <Cuerpo/>
      <Footer/>


    </div>
      
  );
}

export default App;
