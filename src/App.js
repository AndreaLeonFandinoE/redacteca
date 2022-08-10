import{ BrowserRouter, Routes, Route} from "react-router-dom";
import './App.css';
import NavBar from './components/NavBar/NavBar.js';
import ListClients from './components/ListClients/ListClients.js';
import ItemDetailContainer from "./components/ItemCards/ItemDetailContainer.js";
import ItemListContainer from "./components/ItemCards/ItemListContainer.js";
import Cart from "./components/Cart/Cart.js";
import Provider from './context/cartContext';
import Error from "./components/Error404/Error";


function App() {

  return (
    <div className="App">
      <Provider>
        <BrowserRouter>
          <NavBar/>
          <Routes>
            <Route path="contacto" element={
              <ListClients> 
                <h1>Registrate</h1>
              </ListClients>} />
              <Route path="*" element={<Error/>} />
              <Route path="/" element={<ItemListContainer titulo="RedacTeca: Tu biblioteca virtual de ebooks y libros "/>} />
              <Route path="details/:id" element={<ItemDetailContainer/>}/>
              <Route path="category/:category" element={<ItemListContainer/>}/>
              <Route path="/cart" element={<Cart/>} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
