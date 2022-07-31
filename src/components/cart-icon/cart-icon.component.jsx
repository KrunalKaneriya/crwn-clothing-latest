import { ReactComponent as ShoppingIcon } from "../../assets/114 shopping-bag.svg";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import "./cart-icon.styles.scss";

const CartIcon = () => {
    const {isCartOpen,setIsCartOpen} = useContext(CartContext);

    const isCartOpenToggle = () => setIsCartOpen(!isCartOpen);
    return (
        <div onClick={isCartOpenToggle} className="cart-icon-container">
            <ShoppingIcon  className="shopping-icon"/>
            <span className="item-count">10</span>
        </div>
    )
}

export default CartIcon;