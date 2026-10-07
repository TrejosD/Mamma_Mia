// import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar(){
    // const [loged, setLoged] = useState(false);
    // const togleTokenValue = ()=> setLoged(!loged);
    const total = 25000
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
            <div>🛒 Total: ${total.toLocaleString()}</div>
            </Link>
        </nav>
    )
}

export default Navbar