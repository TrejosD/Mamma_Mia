import { createContext, useEffect, useState } from "react";


export const PizzasContext = createContext();
const PizzasProvider = ({children})=>{
const [pizzas, setPizzas] = useState([]);

useEffect(()=>{
    async function getPizzas() {
        const resp = await fetch("http://localhost:5000/api/pizzas");
        const data = await resp.json();
        setPizzas(data);
    }
    getPizzas()
},[]);

    return(
        <PizzasContext.Provider value={{pizzas, }}>
            {children}
        </PizzasContext.Provider>
    )
}

export default PizzasProvider;