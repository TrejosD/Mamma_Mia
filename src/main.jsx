import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import CartProvider from './contexts/CartContext.jsx'
import PizzasProvider from './contexts/PizzasContext.jsx'
import UserProvider from './contexts/UserContext.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UserProvider>
    <CartProvider>
    <PizzasProvider>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </PizzasProvider>
    </CartProvider>
    </UserProvider>
  </StrictMode>,
)
