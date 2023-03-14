import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import { lazy, Suspense } from 'react';
import './App.css';
import ProductForm from './components/ProductForm';
import ProductList from './components/ProductList';

import Default from './components/Default';

import Home from './components/Home';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
//http://localhost:3000/details/3
//http://localhost:3000/cart
//http://localhost:3000/
//http://localhost:3000/products
//http://localhost:3000/new_product

const Cart = lazy(() => import('./components/Cart'));
const Details = lazy(() => import('./components/Details'));

function App() {
  return (
   <Container>
    <BrowserRouter>
    <Navbar bg="dark" variant='dark'>
      <Container>
        <Navbar.Brand>Mobile Shop</Navbar.Brand>
        <Nav>
          <Nav.Link as={Link} to="/products">Home</Nav.Link>
          <Nav.Link as={Link} to="/products">Phones</Nav.Link>
          <Nav.Link as={Link} to="/new_product">New Product</Nav.Link>
          <Nav.Link as={Link} to="/cart">
            <FontAwesomeIcon icon={faShoppingCart}/>
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>

    <Suspense fallback={<h1>Loading....</h1>}>
      <Routes>
        <Route path="/products" element={<ProductList />} />
        <Route path="/details/:id" element={<Details/>} />
        <Route path="/new_product" element={<ProductForm />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/" element={<ProductList />} />
        <Route path="*" element={<Default />} />
      </Routes>
      </Suspense>
    </BrowserRouter>
    </Container>
  );
}

export default App;
