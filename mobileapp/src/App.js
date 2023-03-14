import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import './App.css';
import ProductForm from './components/ProductForm';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import Default from './components/Default';
import Details from './components/Details';
import Home from './components/Home';
//http://localhost:3000/details/3
//http://localhost:3000/cart
//http://localhost:3000/
//http://localhost:3000/products
//http://localhost:3000/new_product
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/products" element={<ProductList />} />
        <Route path="/details/:id" element={<Details/>} />
        <Route path="/new_product" element={<ProductForm />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Default />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
