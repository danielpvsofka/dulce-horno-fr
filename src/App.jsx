import './App.css';
import Encabezado from './components/Encabezado.jsx';
import ProductoCard from './components/ProductoCard.jsx';

function App() {
  return (
    <main>
      <Encabezado />

      <ProductoCard
        nombre="Torta de chocolate"
        descripcion="Bizcocho húmedo con ganache"
        precio="$45.000"
      />
      <ProductoCard
        nombre="Galletas de avena"
        descripcion="Caja x 12"
        precio="$18.000"
      />
      <ProductoCard
        nombre="Cupcakes de vainilla"
        descripcion="Caja x 6"
        precio="$30.000"
      />
    </main>
  );
}

export default App;
