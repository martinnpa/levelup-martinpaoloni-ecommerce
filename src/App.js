import ItemListContainer from "components/ItemList/ItemListContainer";
import Header from "components/Header";
import ItemDetailContainer from "components/ItemDetail/ItemDetailContainer";
import Cart from "components/Cart";
import NewOrder from "components/NewOrder";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Context from "context";
import Footer from "components/Footer";
import Container from "components/Container";

function App() {

  return (
    <>
      <Context>
        <Container>
            <BrowserRouter>

              <Header/>

              <Routes>
                  <Route path="/" element={<ItemListContainer/>}/>
                  <Route path="/item/:itemId" element={<ItemDetailContainer/>}/>
                  <Route path="/category/:categoryId" element={<ItemListContainer/>}/>
                  <Route path="/cart" element={<Cart/>}/>
                  <Route path="/order/:orderId" element={<NewOrder/>}/>
                  <Route path="/*" element={<h2 className="text-center py-10 px-4">Error 404, Página no encontrada.</h2>}/>
              </Routes>

              <Footer/>

            </BrowserRouter>
        </Container>
    </Context>
    </>
  );
}

export default App;
