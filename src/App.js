import {useState} from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar.js';
import Button from './components/Button/Button.js';
import ButtonCont from './components/Button/ButtonCont.js';
import CardsContainer from './components/Cards/CardsContainer.js';
import ListClients from './components/ListClients/ListClients.js';


function App() {

  const [numero, setNumero] = useState(0);
  
  const cart = () => {
    console.log("Agregado al carrito");
    setNumero(numero + 1);
  }

  return (
    <div className="App">
    <NavBar numero={numero}/>

    <CardsContainer titulo="Venta de libros y Ebooks"/>
    
    <ButtonCont stock={20} initial={0}>
      <Button product="Agregar al carrito" cart={cart}/>
    </ButtonCont >

    <ListClients> 
      <h1>Registrate</h1>
    </ListClients>
      
    </div>
  );
}

export default App;
