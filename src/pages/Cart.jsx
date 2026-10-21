import { CartContext } from "../contexts/CartContext";
import { useContext} from "react";
import {AuthenticationContext} from '../contexts/AuthenticationContext';

export default function Cart() {
  const {cart, totalCart, increaseCount, decreaseCount, removeProduct} = useContext(CartContext);
  const {token} = useContext(AuthenticationContext);
   

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
          <button disabled={!token} className="btn btn-dark">Pagar</button>
        </div>
      </main>
    </>
  );
}
