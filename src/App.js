import ItemListContainer from "components/Items/ItemListContainer";
import NavBar from "components/NavBar";
import ItemDetailContainer from "components/Items/ItemDetail/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  return (
    <>
    <div className="min-h-screen theme-dashboard">
        <BrowserRouter>
          <header>
              <NavBar/>
          </header>
          <Routes>
              <Route path="/" element={<ItemListContainer/>}/>
              <Route path="/item/:itemId" element={<ItemDetailContainer/>}/>
          </Routes>
        </BrowserRouter>

      {/* <ItemListContainer /> */}

      {/* <ItemDetailContainer /> */}

    </div>
    </>
  );
}

export default App;
