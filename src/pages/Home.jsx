import Header from "../components/Header"
import Cardpizza from "../components/Cardpizza"
import { useContext } from "react"
import { PizzasContext } from "../contexts/PizzasContext"

function Home(){
    
const {pizzas} = useContext(PizzasContext);
    
    return(
        <>
        <Header/>
        <section className="main">
        {pizzas.map(pizza=><Cardpizza key={pizza.id} id={pizza.id} img={pizza.img} precio={pizza.price} name={pizza.name} ingredientes={pizza.ingredients} />)}
        </section>        
        </>
    )
}

export default Home

