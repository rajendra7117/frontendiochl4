import React, {useContext} from 'react'
import './Cart.css'
import { CartContext } from '../../store/CartContext'
import image1 from '../../images/image-product-1.jpg'
import del from '../../images/icon-delete.svg'
const Cart = () => {
  const CartCtx = useContext(CartContext)
  let count = CartCtx.count
  const deleteItem = e => {
    CartCtx.deleteItem()
  }
  return (
    <div className='cart'>
        <div> <h3>Cart</h3></div>
        {count>0 ? (<> <div> 
          <img src={image1}/>
          <div className='text'>
          <p>Fall Limited Edition Sneakers</p>
          <p>$125.00 x {count} <span>${count*125}.00</span></p>
          </div>
          <img src={del} alt="delete-icon" className='delete-icon' onClick={deleteItem}/>
        </div>
        <button>Checkout</button></>) : 'No items on your cart'}
       
    </div>
  )
}

export default Cart