import ItemListContainer from "components/ItemListContainer/ItemListContainer";
import NavBar from "components/NavBar";

function App() {

  return (
    <>
    <div className="min-h-screen theme-dashboard">
      <header>
        <NavBar/>
      </header>

      <ItemListContainer />

    </div>
    </>
  );
}

export default App;
