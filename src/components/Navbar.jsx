import { useState } from "react";

function Navbar(){
    const [loged, setLoged] = useState(false);
    const togleTokenValue = ()=> setLoged(!loged);
    const total = 25000
    return(
        <nav className="nav">
            <h3>Pizzeria Mamma Mia!!</h3>
            <div>
                <ul className="menu">
                    <li className="menu-item">🍕 Home</li>
                    <>{loged ? <>
                        <li className="menu-item">🔓 Profile</li>
                        <li className="menu-item" onClick={togleTokenValue}>🔒 Logout</li>
                    </> : <>
                    <li className="menu-item">🔐 Register</li>
                    <li className="menu-item" onClick={togleTokenValue}>🔐 Login</li>
                    </>
                    }
                    </>
                </ul>
            </div>
            <div>🛒 Total: ${total.toLocaleString()}</div>
        </nav>
    )
}

export default Navbar