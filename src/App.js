
import './App.css';
import NavBar from './components/NavBar/NavBar.js';
import Button from './components/Button/Button.js';
import Libros from './components/Libros/Libros.js';
import Forms from './components/Forms/Forms.js';

function App() {
  const botonLibro = () => {
      alert ("Agregado al carrito")
  }

  return (
    <div className="App">
    <NavBar/>
    <Libros>
      <Button libro="Comprar" botonLibro={botonLibro}/>
    </Libros>
    <Forms>
      <h1>Registrate</h1>
    </Forms>
    </div>
  );
}

export default App;
