import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Products from './pages/Products/Products';
import ProductDetails from './pages/ProductDetails/ProductDetails';
import Cart from './pages/Cart/Cart';
import Checkout from './pages/Checkout/Checkout';
import Logo from './components/Logo/Logo';

function App() {

  return (
    <>
    <div style={{textAlign: 'center'}}>
        <Logo/>
    </div>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Products/>} />
        <Route path='/product/:productId' element={<ProductDetails/>} />
        <Route path='/shopping-cart' element={<Cart/>} />
        <Route path='/checkout' element={<Checkout/>} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
