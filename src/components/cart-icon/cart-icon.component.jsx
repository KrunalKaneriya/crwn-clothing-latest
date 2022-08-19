//This component displays cart icon on the right corner of the page and it also displays number of items we have in our cart

import { useContext } from 'react';

import { CartContext } from '../../contexts/cart.context';

import { CartIconContainer,ItemCount, ShoppingSvg } from "./cart-icon.styles";

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);

  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);

  return (
    <CartIconContainer onClick={toggleIsCartOpen}>
      <ShoppingSvg />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
