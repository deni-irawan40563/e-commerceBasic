import "./style/SideDrawer.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const SideDrawer = ({ show, click }) => {
  const sideDrawerClass = ["sidedrawer"];

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const getCartCount = () => {
    return cartItems.reduce((qty, item) => Number(item.qty) + qty, 0);
  };

  if (show) {
    sideDrawerClass.push("show");
  }

  return (
    <div className={sideDrawerClass.join(" ")}>
      <ul className="sidedrawer__links" onClick={click}>
        <li>
          <Link to="/cart">
            <i className="fas fa-shopping-cart"></i>
            <span>
              Cart{" "}
              <span className="sidedrawer__cartbadge">{getCartCount()}</span>
            </span>
          </Link>
        </li>
        <li>
          <Link to="/">
            <i className="fas fa-bell"></i>
            <span>
              Notification{" "}
              <span className="sidedrawer__cartbadge">1</span>
            </span>
          </Link>
        </li>
        <li>
          <Link to="/">
            <i className="fas fa-envelope"></i>
            <span>
              Message{" "}
              <span className="sidedrawer__cartbadge">1</span>
            </span>
          </Link>
        </li>
        <li>
          <Link to="/">
            <i className="fas fa-store"></i>
            <span>
              Toko{" "}
              <span className="sidedrawer__cartbadge">1</span>
            </span>
          </Link>
        </li>
        <li>
          <Link to="/">
            <i className="fas fa-user"></i>
            <span>
              User{" "}
              <span className="sidedrawer__cartbadge">1</span>
            </span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default SideDrawer;
