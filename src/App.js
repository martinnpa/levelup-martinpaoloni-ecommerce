import ItemListContainer from "components/Items/ItemListContainer";
import NavBar from "components/NavBar";
import ItemDetailContainer from "components/Items/ItemDetail/ItemDetailContainer";

function App() {

  return (
    <>
    <div className="min-h-screen theme-dashboard">
      <header>
        <NavBar/>
      </header>

      {/* <ItemListContainer /> */}

      <ItemDetailContainer />

    </div>
    </>
  );
}

export default App;
