import './App.css';
import Header from './pages/components/header/Header';
import ProductList from './pages/components/products/ProductList';

function App() {
  return (
    <div>
      <header>
        <Header />
        <ProductList />
      </header>
    </div>
  );
}

export default App;
