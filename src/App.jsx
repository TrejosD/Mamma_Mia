import './App.css'
import Footer from './components/Footer.jsx';
import Home from './components/Home.jsx'
import Navbar from './components/Navbar.jsx';
import Register from './components/Register.jsx';
import Login from './components/Login.jsx';

function App() {

  return (
    <>
    <Navbar/>
    <Home/>
    <Register/>
    <Login/>
    <Footer/>
    </>
  )
}

export default App;
