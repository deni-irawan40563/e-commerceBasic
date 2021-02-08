import "./style/ModalItem.css";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

// Components
import CartItems from "./Cartitems";

const CartScreen = () => {

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  useEffect(() => {}, []);

  return (
      <div className="cartscreen">
        <div className="cartscreen__left">

          {cartItems.length === 0 ? (
            <div>
              Your Cart Is Empty <Link to="/">Go Back</Link>
            </div>
          ) : (
            cartItems.map((item) => (
              <CartItems
                key={item.product}
                item={item}
              />
            ))
          )}
        </div>

        <div className="button-checkout">
            <Link to="/cart">Lihat Keranjang</Link>
        </div>
      </div>
  );
};

export default CartScreen;
