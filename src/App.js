import NavBar from "components/NavBar";
import ProductCard from "components/ProductCard/ProductCard";

function App() {
  return (
    <>
    <div className="min-h-screen theme-dashboard">
      <header>
        <NavBar/>
      </header>

      <div className="p-6 content">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          <ProductCard
          pizza={{
            name:'Muzarella',
            photo: 'https://img.pizza/500/300',
            stock: 20,
            description: 'Salsa, Muzarella, Olivas verdes.'
          }}
          />
          <ProductCard
          pizza={{
            name:'Napolitana',
            photo: 'https://img.pizza/500/301',
            stock: 5,
            description: 'Salsa, Muzarella, Tomate, Olivas verdes.'
          }}
          />
          <ProductCard
          pizza={{
            name:'Fugazzetta',
            photo: 'https://img.pizza/499/301',
            stock: 100,
            description: 'Salsa, Muzarella, Cebolla, Mucha cebolla.'
          }}
          />
        </div>
      </div>

    </div>
    </>
  );
}

export default App;
