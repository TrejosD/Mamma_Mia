function Cardpizza(props){
    return(
        <div className="card">
            <img src={props.url} alt="pizza img" />
            <h2>Pizza {props.name}</h2>
            <div>
                <h3>Ingredientes:</h3>
                <p>{props.ingredientes}</p>
            </div>
            <h2>Precio: ${props.precio.toLocaleString()}</h2>
            <span><button>Ver mas</button>
            <button className="add">Añadir</button></span>
        </div>
    )
}

export default Cardpizza