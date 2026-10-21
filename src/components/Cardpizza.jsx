import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import { CartContext } from "../contexts/CartContext"

function Cardpizza({img, name, ingredientes, precio, id}){
    const navigate = useNavigate();
    const {addToCart} = useContext(CartContext);

    const setNavigation = (id)=>{
        navigate(`/pizza/${id}`)
    }
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
    
                <button onClick={()=>setNavigation(id)}>Ver mas</button>
                
            </span>
            <button className="add" onClick={()=>addToCart({id: id, name: name, img:img, price: precio, count:1})}>Añadir</button>
        </div>
            
    )
}

export default Cardpizza