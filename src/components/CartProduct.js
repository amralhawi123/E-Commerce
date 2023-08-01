import React from 'react'

const CartProduct = () => {
  return (
    <div className='cartProduct'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-7 box'>
            <h3>No Items are add in Cart</h3>
          </div>
          <div className='col-md-4 box b2'>
            <h3>Cart Summary</h3>
            <div className='info'>
              <p>Total Price :</p>
              <span>$0.00</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartProduct
