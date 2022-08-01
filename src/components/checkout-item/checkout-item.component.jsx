import { useContext } from "react";
import "./checkout-item.styles.scss";
import { CartContext } from "../../context/card.context";

const CheckoutItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;

  const { clearItemFromCart, addItemToCart, removeItemToCart } =
    useContext(CartContext);

  const clearitemHandler = () => {
    clearItemFromCart(cartItem);
  };

  const addItemHandler = () => addItemToCart(cartItem)
  const removeItemHandler = () => removeItemToCart(cartItem)

  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={`${name}`} />
      </div>

      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={removeItemHandler}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={addItemHandler}>
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <span className="remove-button" onClick={clearitemHandler}>
        &#10005;
      </span>
    </div>
  );
};
export default CheckoutItem;