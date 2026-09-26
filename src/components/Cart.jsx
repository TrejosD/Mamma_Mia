import { pizzaCart } from "../data/pizzas"
import { useState } from "react"


export default function Cart() {
  const [cart, setCart] = useState(pizzaCart);
  let total = 0;
  function updateValue(pizza, value){
    const newCart = [...cart];
    const index = newCart.findIndex(item => item.id === pizza.id);
    const findedPizza = newCart[index];
    findedPizza.count = (newCart[index].count + value);
    setCart(newCart);
  if (cart[index].count == 0){
    removeItem(findedPizza)
  }
  }

  function removeItem(pizza){
    const filteredList = cart.filter(item=> item.id !== pizza.id);
    setCart(filteredList);
  }

  cart.forEach((producto)=>{
    total += producto.price * producto.count;
  })

  return (
    <>
      <main className="cartContainer">
        <h2>Detalles del Pedido:</h2>
        <section className="cartSection">
          {cart.map((pizza) => {          
            return <div className="cartCard" key={pizza.id}> <img src={pizza.img} alt="pizza image" /> <p>{pizza.name}</p> <p>$ {pizza.price}</p><button onClick={()=>updateValue(pizza,-1)} disabled={pizza.count == 0}>-</button><div>{pizza.count}</div><button onClick={()=>updateValue(pizza,1)}>+</button></div>
          })}
        </section>
        <div className="totalStyle"><p>Total: $ {total.toLocaleString()}</p><button className="btn btn-dark">Pagar</button></div>
      </main>
    </>
  )
}
