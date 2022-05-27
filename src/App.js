import ItemListContainer from "components/ItemList/ItemListContainer";
import NavBar from "components/NavBar";
import ItemDetailContainer from "components/ItemDetail/ItemDetailContainer";
import Cart from "components/Cart";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Context from "context";

function App() {

  return (
    <>
      <Context>
        <div className="min-h-screen theme-dashboard">
            <BrowserRouter>
              <header>
                  <NavBar/>
              </header>
              <Routes>
                  <Route path="/" element={<ItemListContainer/>}/>
                  <Route path="/*" element={<h2>Error 404, Página no encontrada.</h2>}/>
                  <Route path="/item/:itemId" element={<ItemDetailContainer/>}/>
                  <Route path="/category/:categoryId" element={<ItemListContainer/>}/>
                  <Route path="/cart" element={<Cart/>}/>
              </Routes>
            </BrowserRouter>
        </div>
    </Context>
    </>
  );
}

export default App;
