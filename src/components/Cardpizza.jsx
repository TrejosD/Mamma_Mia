import { Link } from "react-router-dom"

function Cardpizza({img, name, ingredientes, precio}){
    return(
            <Link to='/pizza/p001/' className="menu-item">
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
            <span className="botones"><button>Ver mas</button>
            <button className="add">Añadir</button></span>
        </div>
            </Link>
    )
}

export default Cardpizza