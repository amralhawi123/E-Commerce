import React from 'react'
import { Button, Stack } from 'react-bootstrap'
import storeItem from '../data/storeItem.json'
import formatCurancy from './formateCurrancy';
import { useShoppingcart } from '../context/shoppingCartContext';

const CardItem = ({id, quantity}) => {
   const {removeItem} = useShoppingcart()

   const item = storeItem.find((i) => i.id === id)
  if(item == null) return null

  return (
    <Stack direction='horizontal' gap={3} className='d-flex align-item-center'>
      <img src={item.imageUrl} alt='cart-img'
      style={{width:"150px", height:"110px", objectFit:"cover"}}/>
      <div className='me-auto'>
         <div style={{fontSize:"1.5rem"}}>
            {item.name} { " " }
            {
               quantity > 1 && (
                  <span className='text-muted' style={{fontSize:"0.85rem"}}>x{quantity}</span>
               )
            }
         <div className='text-muted' style={{fontSize:"1rem"}}>
            {formatCurancy(item.price)}
         </div>
         </div>
      </div>
         <div>{formatCurancy(item.price * quantity)}</div>
      <Button variant='outline-danger' size='sm' onClick={() => removeItem(id)}>
         &times;
      </Button>
    </Stack>
  )
}

export default CardItem
