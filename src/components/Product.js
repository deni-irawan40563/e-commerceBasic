import "./style/Product.css";
import { Link } from "react-router-dom";

//Format currency
import CurrencyFormat from 'react-currency-format';

const Product = ({ imageUrl, storePlace, price, name, productId }) => {
  return (
    <div className="product">
      <Link to={`/product/${productId}`}>
        <div className="love">
          <i className="fas fa-heart"></i>
        </div>
        <img src={imageUrl} alt={name}/>
        <div className="product-info">
          <p className="name">{name}</p>
          <CurrencyFormat value={price} displayType={'text'} thousandSeparator={true} prefix={'Rp '} renderText={value => <p className="price">{value}</p>} />
          <p className="location"><i className="fas fa-crown"/> <span>{storePlace}</span></p>
          <div className="rating">
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="far fa-star"></i>
          </div>
          <p className="role">Grosir</p>
        </div>
      </Link>
    </div>
  );
};

export default Product;
