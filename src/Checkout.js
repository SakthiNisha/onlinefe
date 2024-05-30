import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removefromCart } from './redux/cartSlice'

export const Checkout = () => {
    const cartItems = useSelector(state => state.cart.cart)
    const dispatch = useDispatch()
  return (
    <div>
        <h2>Cart Items</h2>
        {
            cartItems.map(item => {
                return (
                    <div> 
                        <img src={item.image} alt="" />
                        <div>
                            <h4>{item.title}</h4>
                            <h4>{item.id}</h4>
                        </div> 
                        <button class="btn btn-dark add-cart" onClick={()=> dispatch(removefromCart({id: item.id}))}>Remove</button> 
                    </div>
                )
            })
        }
    </div>
  )
}
