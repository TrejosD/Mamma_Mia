function Cardpizza({img, name, ingredientes, precio}){
    return(
        <div className="card">
            <img src={img} alt="pizza img" />
            <h2>{name}</h2>
            <div>
                <h3>Ingredientes:</h3>
                <ul>
                    {ingredientes.map(ing=><li>{ing + ', '}</li>)}
                </ul>
            </div>
            <h2>Precio: ${precio}</h2>
            <span className="botones"><button>Ver mas</button>
            <button className="add">Añadir</button></span>
        </div>
    )
}

export default Cardpizza