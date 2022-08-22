import{ BrowserRouter, Routes, Route} from "react-router-dom";
import './App.css';
import NavBar from './components/NavBar/NavBar.js';
import ItemDetailContainer from "./components/ItemCards/ItemDetailContainer.js";
import ItemListContainer from "./components/ItemCards/ItemListContainer.js";
import Cart from "./components/Cart/Cart.js";
import Provider from './context/cartContext';
import Error from "./components/Error404/Error";
import Forms from "./components/Forms/Forms"
import Footer from "./components/Footer/Footer";

function App() {

  return (
    <div className="App">
      <Provider>
        <BrowserRouter>
          <div className="footer">
            <NavBar/>
            <Routes>
              <Route path="*" element={<Error/>} />
              <Route path="/" element={<ItemListContainer titulo="RedacTeca: Tu biblioteca virtual de ebooks y libros "/>} />
              <Route path="details/:id" element={<ItemDetailContainer/>}/>
              <Route path="category/:category" element={<ItemListContainer/>}/>
              <Route path="/cart" element={<Cart/>} />
              <Route path="/registro" element={<Forms/>} />
            </Routes>
          </div>
          <Footer/>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
