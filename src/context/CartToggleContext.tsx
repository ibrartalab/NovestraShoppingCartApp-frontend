import { createContext, useState } from "react";

interface cartToggleContextType {
    isCartOpen: boolean;
    setIsCartOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

interface cartToggleContextProviderType {
    children: React.ReactNode;
}

const CartToggleContext = createContext<cartToggleContextType>({
    isCartOpen: true,
    setIsCartOpen: () => {},
});

const CartToggleContextProvider = ({ children }: cartToggleContextProviderType) => {
    const [isCartOpen, setIsCartOpen] = useState<boolean>(false);
    return (
        <CartToggleContext.Provider value={{ isCartOpen, setIsCartOpen }}>
            {children}
        </CartToggleContext.Provider>
    );
};

export { CartToggleContext };
export default CartToggleContextProvider;