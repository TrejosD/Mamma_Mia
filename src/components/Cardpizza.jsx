import { useContext } from "react"
import { Link } from "react-router-dom"
import { CartContext } from "../contexts/CartContext"

function Cardpizza({img, name, ingredientes, precio, id}){

    const {addToCart} = useContext(CartContext);
    return(
            
        <div className="card">
            <img src={img} alt="pizza img" />
            <h2>{name}</h2>
            <div>
                <h3>Ingredientes:</h3>
                <ul>
                    {ingredientes.map((ing, idx)=><li key={idx}>{ing + ', '}</li>)}
                </ul>
            </div>
            <h2>Precio: ${precio}</h2>
            <span className="botones">
                <Link to='/pizza/p001/' className="menu-item">
                <button>Ver mas</button>
                </Link>
            </span>
            <button className="add" onClick={()=>addToCart({id: id, name: name, img:img, price: precio, count:1})}>Añadir</button>
        </div>
            
    )
}

export default Cardpizza