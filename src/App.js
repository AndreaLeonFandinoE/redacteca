import{ BrowserRouter, Routes, Route} from "react-router-dom";
// import {useState} from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar.js';
// import Button from './components/ItemCount/Button.js';
// import ItemCount from './components/ItemCount/ItemCount.js';
import ListClients from './components/ListClients/ListClients.js';
import ItemDetailContainer from "./components/ItemCards/ItemDetailContainer.js";
import ItemListContainer from "./components/ItemCards/ItemListContainer.js";
import Cart from "./components/Cart/Cart.js";
import Provider from './context/cartContext'


function App() {

  // const [numero, setNumero] = useState(0);
  
  // const cart = () => {
  //   console.log("Agregado al carrito");
  //   setNumero(numero + 1);
  // }

  return (
    <div className="App">
      <Provider>
        <BrowserRouter>
          {/* <NavBar numero={numero}/> */}
          <NavBar/>
          <Routes>
            <Route path="contacto" element={
              <ListClients> 
                <h1>Registrate</h1>
              </ListClients>} />
            {/* <Route path="cart" element={
              <ItemCount Count >
                <Button product="Agregar al carrito" cart={cart}/>
              </ItemCount >} /> */}
              <Route path="*" element={<div>404 La página no existe</div>} />
              <Route path="/" element={<ItemListContainer titulo="Venta de libros y Ebooks"/>} />
              <Route path="details/:id" element={<ItemDetailContainer/>}/>
              <Route path="category/:category" element={<ItemListContainer titulo="Venta de libros y Ebooks"/>}/>
              <Route path="/cart" element={<Cart/>} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
