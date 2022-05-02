import React, {useContext} from 'react'
import cartIcon from "../../images/icon-cart.svg";
import minus from "../../images/icon-minus.svg";
import plus from "../../images/icon-plus.svg";
import { CartContext } from '../../store/CartContext';
 
const CartButton = () => {

    const cartCtx = useContext(CartContext)

    const addToCart = e => {
        cartCtx.addToCart()
        
    }
    const reduceCount = e => {
      if(cartCtx.count>0){
        cartCtx.removeFromCart()
      }
    
    }
  return (
      <>
      <div className="count"> <span onClick={reduceCount}><img src={minus}  /></span><span>{cartCtx.count}</span><span  onClick={addToCart}><img src={plus}/></span></div> 
      <button className="cart-btn" onClick={addToCart}> <img src={cartIcon}/>  Add to cart</button>
       
    
    </>
  )
}

export default CartButton