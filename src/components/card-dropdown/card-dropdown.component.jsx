import { useContext } from "react";
import { CartContext } from "../../context/card.context";
import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";
import "./card-dropdown.styles.scss";

const CardDropdown = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((item) => (
          <CartItem key={item.id} cartItem={item} />
        ))}
      </div>

      <Button>GO TO CHECKOUT</Button>
    </div>
  );
};

export default CardDropdown;
