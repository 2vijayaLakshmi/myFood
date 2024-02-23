import { useDispatch, useSelector } from "react-redux";
import FoodItem from './FoodItem';
import { clearCart } from "./utils/cartSlice";


const Cart = () =>{
   const cartItems = useSelector(store => store.cart.items);

   const dispatch = useDispatch();

   const handleClearCart = ()=>{
        dispatch(clearCart())
   }

   console.log(cartItems)
    return(
        <div>
         <h1>Cart Items - {cartItems.length}</h1>
         <button className="clear" onClick={()=> handleClearCart()}>Clear cart</button>
         <div className="cart">
         {cartItems.map(item => <FoodItem key={item.id} {...item}></FoodItem>)}
         </div>
         </div>
    )
}

export default Cart;