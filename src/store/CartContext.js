import { createContext, useState } from "react";

export const CartContext = createContext({
    count: 0,
    addToCart: () => {},
    removeFromCart: () => {},
    deleteItem: () => {}
})

const CartContextProvider = ({children}) => {
 const [count, setCount] = useState(0)
    const addToCart = () => {
        setCount(prev => prev+1)
       
    }
    const removeFromCart = () => {
        setCount(prev => prev-1)
        console.log(count)
    }
    const deleteItem = () => {
        setCount(0)
    }

    const value ={
        count: count,
        addToCart: addToCart,
        removeFromCart: removeFromCart,
        deleteItem: deleteItem
    }
    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export default CartContextProvider