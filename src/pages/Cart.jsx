import { CartContext } from "../contexts/CartContext";
import { useContext} from "react";
import {UserContext} from '../contexts/UserContext';

export default function Cart() {
  const {cart, totalCart, cleanCart, increaseCount, decreaseCount, removeProduct} = useContext(CartContext);
  const {token} = useContext(UserContext);

  const handlePay = async (e)=>{
    e.preventDefault();
    const userToken = localStorage.getItem('token');
    try{
      await fetch('http://localhost:4000/api/checkouts',{
        method: 'POST',
        headers:{
          "Content-Type": "application/json",
          Authorization: `Bearer ${userToken}`,
        },
        body: JSON.stringify({
          cart: cart
        })
      });
    }catch(e){
      console.log(e);
    }
    cleanCart();
    alert('Compra realizada con exito');
  }
   

  return (
    <>
      <main className="cartContainer">
        <h2>Detalles del Pedido:</h2>
        <section className="cartSection">
          {cart.map((pizza) => {
            return (
              <div className="cartCard" key={pizza.id}>
                {" "}
                <img src={pizza.img} alt="pizza image" /> <p>{pizza.name}</p>{" "}
                <p>$ {pizza.price}</p>
                <button
                  onClick={() => pizza.count ==1 ? removeProduct(pizza.id) : decreaseCount(pizza.id)}
                  disabled={pizza.count == 0}
                >
                  -
                </button>
                <div>{pizza.count}</div>
                <button onClick={() => increaseCount(pizza.id)}>+</button>
              </div>
            );
          })}
        </section>
        <div className="totalStyle">
          <p>Total: $ {totalCart}</p>
          <button disabled={cart == 0} onClick={handlePay} className="btn btn-dark">Pagar</button>
        </div>
      </main>
    </>
  );
}
