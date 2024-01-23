import React, { useContext } from 'react'
import './CartItems.css'
import { ShopContext } from '../../Context/ShopContext'
import remove_icon from '../Assets/cart_cross_icon.png'

export const CartItems = () => {
    const {all_product,cartItems,removeFromCart,getTotalCartAmount}= useContext(ShopContext);
  return (
    <div className='cartitems'>
    <div className='cartitems-format-main'>
    <p>Product</p>
    <p>Title</p>
    <p>Price</p>
    <p>Quantity</p>
    <p>Total</p>
    <p>Remove</p>
    </div>
    <hr/>
    {all_product.map((e,i)=>{
        if(cartItems[e.id]>0)
        {
            return <div key={i}>
            <div className='cartitems-format cartitems-format-main' >
            <img src={e.image} alt='' className='cart-icon-product-icon'/>
            <p>{e.name}</p>
            <p>${e.new_price}</p>
            <button className='cartitems-quamtity'>{cartItems[e.id]}</button>
            <p>${e.new_price*cartItems[e.id]}</p>
            <img className='cartitems-remove-icon' src={remove_icon} onClick={()=>{removeFromCart(e.id)}} alt=''/>
        </div>
        <hr/>
    </div>
        }
        return null;
    })}
    <div className='cartitems-down'>
        <div className='cartitems-total'>
            <h1>Cart Total</h1>
            <div>
                <div className='cartitems-totalitem'>
                    <p>Subtotal</p>
                    <p>${getTotalCartAmount()}</p>
                </div>
                <hr/>
                <div className='cartitems-totalitem'>
                    <p>Shipping Charges</p>
                    <p>Free</p>
                </div>
                <hr/>
                <div className='cartitems-totalitem'>
                    <h3>Total</h3>
                    <h3>${getTotalCartAmount()}</h3>
                </div>
            </div>
            <button>Proceed To Checkout</button>
        </div>
        <div className='cartitems-promocode'>
            <p>If You Have a Promo Code, Enter It Here</p>
            <div className='cartitems-promobox'>
                <input type='text' placeholder='promo code'/>
                <button>Submit</button>
            </div>
        </div>
    </div>
    </div>
  )
}
