import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import { lazy, Suspense } from 'react';
import './App.css';
import ProductForm from './components/ProductForm';
import ProductList from './components/ProductList';

import Default from './components/Default';

import Home from './components/Home';
//http://localhost:3000/details/3
//http://localhost:3000/cart
//http://localhost:3000/
//http://localhost:3000/products
//http://localhost:3000/new_product

const Cart = lazy(() => import('./components/Cart'));
const Details = lazy(() => import('./components/Details'));

function App() {
  return (
    <BrowserRouter>
    <Suspense fallback={<h1>Loading....</h1>}>
      <Routes>
        <Route path="/products" element={<ProductList />} />
        <Route path="/details/:id" element={<Details/>} />
        <Route path="/new_product" element={<ProductForm />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Default />} />
      </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
