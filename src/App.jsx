import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css'
import Footer from './components/Footer.jsx';
import Navbar from './components/Navbar.jsx';
import Home from './pages/Home.jsx';
import Pizza from './pages/Pizza.jsx';
import Register from './pages/Register.jsx';
import Login from './pages/Login.jsx';
import Profile from './pages/Profile.jsx';
import Cart from './pages/Cart.jsx';
import NotFound from './pages/NotFound.jsx';
import { useContext } from 'react';
import {UserContext} from './contexts/UserContext.jsx';

function App() {
  const {token} = useContext(UserContext);

  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/pizza/:id' element={<Pizza/>}/>
      <Route path='/register' element={token ? <Navigate to='/'/> : <Register/>}/>
      <Route path='/login' element={token ? <Navigate to='/'/> : <Login/>}/>
      <Route path='/profile' element={token ? <Profile/> : <Navigate to='/login'/> }/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='*' element={<NotFound/>}/>
    </Routes>
    <Footer/>
    </>
  )
}

export default App;
