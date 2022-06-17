import ItemListContainer from "components/ItemList/ItemListContainer";
import Header from "components/Header";
import ItemDetailContainer from "components/ItemDetail/ItemDetailContainer";
import Cart from "components/Cart";
import NewOrder from "components/NewOrder";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Context from "context";
import Test from "[trash] Mock Files/Test";

function App() {

  return (
    <>
      <Context>
        <div className="min-h-screen theme-dashboard">
            <BrowserRouter>

              <Header/>

              <Routes>
                  <Route path="/test" element={<Test/>}/>
                  <Route path="/" element={<ItemListContainer/>}/>
                  <Route path="/*" element={<h2>Error 404, Página no encontrada.</h2>}/>
                  <Route path="/item/:itemId" element={<ItemDetailContainer/>}/>
                  <Route path="/category/:categoryId" element={<ItemListContainer/>}/>
                  <Route path="/cart" element={<Cart/>}/>
                  <Route path="/new-order/:orderId" element={<NewOrder/>}/>
              </Routes>
            </BrowserRouter>
        </div>
    </Context>
    </>
  );
}

export default App;
