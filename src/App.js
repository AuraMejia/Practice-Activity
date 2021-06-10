import './App.css';
import Footer from './components/Footer';
import Todo from './components/Todo';
import Cuerpo from './components/Cuerpo';
import Tittle from './components/Tittle';
import GlobalStyles from './GlobalStyles';
function App() {
  return (
    <div className="App">
      <GlobalStyles/>
      <Tittle/>
      <Todo/>
      <Cuerpo/>
      <Footer/>


    </div>
      
  );
}

export default App;
