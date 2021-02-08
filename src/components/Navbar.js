import "./style/Navbar.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = ({ click }) => {
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const getCartCount = () => {
    return cartItems.reduce((qty, item) => Number(item.qty) + qty, 0);
  };

  return (
    <nav className="navbar">
      <Link to="/" className="navbar__logo">
        <h2>E Commerce</h2>
      </Link>
      <form className="search-bar">
        <label>kategori</label>
        <input type="text"/>
        <button type="submit"><i class="fa fa-search"></i></button>
      </form>
      <ul className="navbar__links">
        <li>
          <Link to="/cart" className="cart__link">
            <i className="fas fa-shopping-cart"></i>
              <span className="cartlogo__badge">{getCartCount()}</span>
          </Link>
        </li>

            <li className="disable">
                <Link >
                  <i className="fas fa-bell"/>
                  <span className="cartlogo__badge">1</span>
                </Link>
            </li>
            <li className="disable">
              <Link >
                <i className="fas fa-envelope"/>
                <span className="cartlogo__badge">1</span>
              </Link>
            </li>

        <li>
          <div>|</div>
        </li>

        <li className="disable">
          <Link >
            <i className="fas fa-store"/>
          <span> Toko</span>
          </Link>
        </li>
        <li className="disable">
          <Link >
            <i className="fas fa-user"/>
            <span> Deni Irawan.N</span>
          </Link>
        </li>
      </ul>

      <div className="hamburger__menu" onClick={click}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </nav>
  );
};

export default Navbar;
