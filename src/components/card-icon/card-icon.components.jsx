import { useState } from "react";
import CardDropdown from "../card-dropdown/card-dropdown.component";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import "./card-icon.styles.scss";

const CardIcon = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () =>{
    setIsOpen(!isOpen)
  }
  console.log(toggle)

  return (
    <div onClick={toggle} className="cart-icon-container">
    {isOpen ? <CardDropdown /> : ''}
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">0</span>
    </div>
  );
};

export default CardIcon;
