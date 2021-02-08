import "./style/CartItem.css";
import { Link } from "react-router-dom";

const CartItem = ({item}) => {
  return (
    <div className="cartitem">
      <div className="cartitem__image">
        <img src={item.imageUrl} alt={item.name} />
      </div>
      <Link to={`/product/${item.product}`} className="cartItem__name">
        <h3>{item.name}</h3>
      </Link>
    </div>
  );
};

export default CartItem;
