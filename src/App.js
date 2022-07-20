import{ BrowserRouter, Routes, Route} from "react-router-dom";
import {useState} from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar.js';
import Button from './components/Button/Button.js';
import ButtonCont from './components/Button/ButtonCont.js';
import CardsContainer from './components/Cards/CardsContainer.js';
import ListClients from './components/ListClients/ListClients.js';
import CardsDetailContainer from "./components/Cards/CardsDetailContainer";

function App() {

  const [numero, setNumero] = useState(0);
  
  const cart = () => {
    console.log("Agregado al carrito");
    setNumero(numero + 1);
  }

  return (
    <div className="App">
  
    <BrowserRouter>
      <NavBar numero={numero}/>
      <Routes>
        <Route path="libros" element={<CardsContainer titulo="Venta de libros y Ebooks"/>} />
        <Route path="contacto" element={
          <ListClients> 
            <h1>Registrate</h1>
          </ListClients>} />
        <Route path="cart" element={
          <ButtonCont stock={20} initial={0}>
            <Button product="Agregar al carrito" cart={cart}/>
          </ButtonCont >} />
          <Route path="*" element={<div>404 La página no existe</div>} />
          <Route path="details/:id" element={<CardsDetailContainer/>}/>
          <Route path="category/:name" element={<CardsContainer/>}/>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
