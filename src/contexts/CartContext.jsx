import { createContext, useState } from "react";


export const CartContext = createContext();

const CartProvider = ({children})=>{
    const [cart, setCart] = useState([]);

    function addToCart(product){
        if(cart.length !== 0){
            cart.map((p)=>{
                if(p.id == product.id){
                   return increaseCount(product.id)
                }
                return setCart([...cart,product]);
            })
        }else{
            setCart([...cart, product]);
        }
    }

    const totalCart = cart.reduce((acc, product)=>{
        return acc + product.price * product.count
    },0).toLocaleString();

    function increaseCount(id){
        console.log(id)
        setCart(cart.map((p)=>{
            if(p.id == id)
                return{
                ...p,
                count: p.count+1,
            }
            return p
        }))
    }
    function decreaseCount(id){
        setCart(cart.map((p)=>{
            if(p.id == id)
                return{
                ...p,
                count: p.count-1,
            }
            return p
        }))
    }

    function removeProduct(id){
        const filteredList = cart.filter((item)=> item.id !== id);
        setCart(filteredList);
    }

    return(
        <CartContext.Provider value={{addToCart, totalCart, increaseCount, decreaseCount, removeProduct, cart}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider;