import {useState} from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar.js';
import Button from './components/Button/Button.js';
import Libros from './components/Libros/Libros.js';
import Forms from './components/Forms/Forms.js';
import Ebooks from './components/Ebooks/Ebooks';

function App() {

  const [numero, setNumero] = useState(0);
  
  const cart = () => {
    console.log("Agregado al carrito");
    setNumero(numero + 1);
  }

  return (
    <div className="App">
    <NavBar numero={numero}/>

    <Libros stock={20} initial={0}>
      <Button product="Agregar al carrito" cart={cart}/>
    </Libros >

    <Ebooks stock={10} initial={0}>
      <Button product="Agregar al carrito" cart={cart}/>
    </ Ebooks>
    
    <Forms>
      <h1>Registrate</h1>
    </Forms>
    </div>
  );
}

export default App;
