import Header from "./Header"
import Cardpizza from "./Cardpizza"
import { pizzas } from "../data/pizzas"

function Home(){
    
    return(
        <>
        <Header/>
        <section className="main">
        {pizzas.map(pizza=><Cardpizza key={pizza.id} img={pizza.img} precio={pizza.price} name={pizza.name} ingredientes={pizza.ingredients} />)}
        </section>        
        </>
    )
}

export default Home

