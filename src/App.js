import ItemListContainer from "components/Items/ItemList/ItemListContainer";
import NavBar from "components/NavBar";
import ItemDetailContainer from "components/Items/ItemDetail/ItemDetailContainer";
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
                  <Route path="/item/:itemId" element={<ItemDetailContainer/>}/>
                  <Route path="/category/:id" element={<ItemListContainer/>}/>
                  <Route path="/*" element={<h2>Error 404, Página no encontrada.</h2>}/>
              </Routes>
            </BrowserRouter>
        </div>
    </Context>
    </>
  );
}

export default App;
