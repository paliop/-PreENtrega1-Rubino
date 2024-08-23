import "./App.css";
import NavBar from "./components/Navbar/NavBar";
import ItemListContainer from "./components/ItemList/ItemListContainer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ItemList from "./components/ItemList/ItemList";
import ItemDetailContainer from "./components/ItemDetail/ItemDetailContainer";
import Footer from "./components/Footer/Footer";
import { CartProvider } from "./Context/CartContext";

import CartCheckOut from "./components/CheckOut/CartCheckOut";

import CartContainer from "./components/Cart/CartContainer";

function App() {
  return (
    <>
      <BrowserRouter>
        <CartProvider>
          <NavBar></NavBar>
          <Routes>
            <Route path="/" element={<ItemListContainer />}></Route>
            <Route path="/catalogo" element={<ItemList />}></Route>
            <Route path="/item/:id" element={<ItemDetailContainer />}></Route>
            <Route
              path="/categoria/:idCategoria"
              element={<ItemListContainer />}
            />
            <Route
              path="/luz/:idLuz"
              element={<ItemListContainer></ItemListContainer>}
            ></Route>
            <Route path="/sort/:asc" element={<ItemListContainer />} />
            <Route path="/cart" element={<CartContainer />} />
            <Route
              path="/CartCheckOut"
              element={<CartCheckOut></CartCheckOut>}
            ></Route>
          </Routes>
          <Footer></Footer>
        </CartProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
