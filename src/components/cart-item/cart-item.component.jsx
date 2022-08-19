//This component consist of a single CartItem which is displayed inside cardDropdown Component and it includes item name image quantity and price

import {CartItemContainer,CartItemDetails,CartItemImage,CartItemName} from './cart-item.styles';

const CartItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <CartItemContainer>
      <CartItemImage src={imageUrl} alt={`${name}`} />
      <CartItemDetails>
        <CartItemName>{name}</CartItemName>
        <span>
          {quantity} x ${price}
        </span>
      </CartItemDetails>
    </CartItemContainer>
  );
};

export default CartItem;
