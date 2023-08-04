
import { useContext } from "react";
import { useState, useEffect } from "react";
import { createContext } from "react";
import CartProduct from "../components/CartProduct";

const ShoppingCartContext = createContext({})

const ShoppingCartProvider = ({children}) => {

   const initialCartItem = localStorage.getItem("shopping-cart")? JSON.parse(localStorage.getItem("shopping-cart")):[]
   const [cartItems, setCartItems] = useState(initialCartItem)

   useEffect(() => {
      localStorage.setItem("shopping-cart", JSON.stringify(cartItems))
   }, [cartItems])

   const getItemsQuantity =(id)=>{
      return cartItems.find((item) => item.id === id)?.quantity || 0
   }
   const removeItem =(id)=>{
      setCartItems((currentItem) => currentItem.filter((item) => item.id !== id))}

      const getQuantity = cartItems.reduce((quantity, item) => (
         item.quantity + quantity
      ), 0)

      const increasCartQuantity =(id) => {
         setCartItems((currntItems) => {
            if(currntItems.find((item) => item.id === id) == null){
               return [...currntItems, {id, quantity:1}];
            } else {
               return currntItems.map((item) => {
                  if(item.id === id){
                     return {...item, quantity: item.quantity + 1};
                  } else {
                     return item;
                  }
               })
            }
         })
      }

  return (<ShoppingCartContext.Provider 
  value={{cartItems, getItemsQuantity, removeItem, increasCartQuantity, getQuantity}}>
   {children}
   <CartProduct/>
  </ShoppingCartContext.Provider>)
}

export default ShoppingCartProvider

export const useShoppingcart =() => {
   return useContext(ShoppingCartContext)
}