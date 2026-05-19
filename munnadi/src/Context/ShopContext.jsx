import React, { createContext, useState,useEffect } from "react";
import all_product from '../Components/Assets/all_product';

export const ShopContext = createContext(null);
const getDefaultCart = ()=>{
        let cart = {};
        for (let index = 1; index < all_product.length; index++) {
            cart[index] = 0;
        }
        return cart;
    }

const ShopContextProvider = (props)=>{

    const [cartItems,setCartItems] = useState(getDefaultCart());
    useEffect(() =>{
        console.log(cartItems);
    }, [cartItems]);
    
    const addToCart = (itemId)=>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId] + 1}));
    }

    const removeFromCart = (itemId)=>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId] - 1}));
    }

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems)
        {
            console.log(item, cartItems[item]);
            if(cartItems[item]>0)
            {
                let itemInfo = all_product.find((product)=>product.id === Number(item));
                totalAmount += cartItems[item] * itemInfo.new_price;
            }
        }
        return totalAmount;
    }

    const getTotalCartItems = () =>{
        let totalItem = 0;
        for(const item in cartItems)
        {
            if(cartItems[item]>0)
            {
                totalItem+= cartItems[item];
            }
        }
        return totalItem;
    }

    
    const contextValue = {getTotalCartItems,getTotalCartAmount,all_product,cartItems,addToCart,removeFromCart};

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;