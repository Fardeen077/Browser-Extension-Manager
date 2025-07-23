import { useContext, createContext, useState, useEffect } from "react";
import cartData from "../../data.json"
// create context

const CartContext = createContext();

// Custome Hooks
export const useCart = () => {
    return useContext(CartContext);
};

// Provider component
export const CartProvider = ({ children }) => {
    const [carts, setCarts] = useState([]);

    useEffect(() => {
        setCarts(cartData);
    }, []);

    const allCarts = () => carts;
    const activeCarts = () => carts.filter((item) => item.active);
    const inactiveCarts = () => carts.filter((item) => !item.active);

    const remove = (id) => {
        setCarts((prev) => prev.filter((item) => item.id !== id))
    };

    return (
        <CartContext.Provider
            value={{
                carts,
                allCarts,
                activeCarts,
                inactiveCarts,
                remove,
            }}>
            {children}
        </CartContext.Provider>
    );
}