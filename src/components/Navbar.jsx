// import { useState } from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../contexts/CartContext";

function Navbar(){
    // const [loged, setLoged] = useState(false);
    // const togleTokenValue = ()=> setLoged(!loged);
    const {totalCart} = useContext(CartContext);
    return(
        <nav className="nav">
            <h3>Pizzeria Mamma Mia!!</h3>
            <div>
                <ul className="menu">
                    <Link to='/' className="menu-item">🍕 Home</Link>
                    <Link to='/profile' className="menu-item">🔓 Profile</Link>
                    <Link to='/register' className="menu-item">🔐 Register</Link>
                    <Link to='/login' className="menu-item">🔐 Login</Link>
                </ul>
            </div>
            <Link to='/cart' className="menu-item">
            <div>🛒 Total: ${totalCart}</div>
            </Link>
        </nav>
    )
}

export default Navbar