import Header from "./Header"
import Cardpizza from "./Cardpizza"
import { useState, useEffect } from "react"

function Home(){
    const [pizzas, setPizzas] = useState([]);

    
    useEffect(()=>{
        async function getPizzas(){
            const resp = await fetch('http://localhost:5000/api/pizzas');
            const data = await resp.json();
            console.log(data);
            setPizzas(data);
        }
        getPizzas();
    },[]);
    
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

