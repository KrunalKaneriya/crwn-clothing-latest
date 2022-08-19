//This component displays the single product as a card

import { useContext } from 'react';

import { CartContext } from '../../contexts/cart.context';

import Button,{BUTTON_TYPE_CLASSES} from '../button/button.component';

import {ProductCardFooter,ProductCardContainer} from "./product-card.styles";

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  const { addItemToCart } = useContext(CartContext);

  const addProductToCart = () => addItemToCart(product);

  return (
    <ProductCardContainer>
      <img src={imageUrl} alt={`${name}`} />
      <ProductCardFooter>
        <span className='name'>{name}</span>
        <span className='price'>{price}</span>
      </ProductCardFooter>
      <Button buttonType={BUTTON_TYPE_CLASSES.inverted} onClick={addProductToCart}>
        Add to card
      </Button>
    </ProductCardContainer>
  );
};

export default ProductCard;
