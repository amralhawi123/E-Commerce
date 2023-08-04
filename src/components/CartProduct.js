import React from 'react'
import { useShoppingcart } from '../context/shoppingCartContext';
import CardItem from './CardItem';
import formatCurancy from './formateCurrancy';
import storeItem from '../data/storeItem.json'
const CartProduct = () => {

  const {cartItems} = useShoppingcart()

  return (
    <div className='cartProduct'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-7 box'>
            {
              cartItems.length >= 1 ? (
                cartItems.map((item) => (
                  <CardItem key={item.id} {...item}/>
                ))
              ): (<h1>There is no Items</h1>)
            }
          </div>
          <div className='col-md-4 box b2'>
            <h3>Cart Summary</h3>
            <div className='info'>
              <p>Total Price :</p>
              <span>
                {
              formatCurancy(
                cartItems.reduce((total, cartitem) => {
                  const item = storeItem.find((i) => i.id === cartitem.id)
                  return total + (item?.price || 0) * cartitem.quantity
}, 0)
              )
            }</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartProduct
