/* eslint-disable jsx-a11y/alt-text */
import "./style/ProductScreen.css";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import CartScreen from "../components/ModalItem";
import Modal from "../components/Modal";
// import ImageOnProducts from "../components/ImageOnProduct"

//Format currency
import CurrencyFormat from 'react-currency-format';



// Actions
import { getProductDetails } from "../redux/actions/productActions";
import { addToCart } from "../redux/actions/cartActions";

const ProductScreen = ({ match, history }) => {
  const [qty] = useState(1);
  const dispatch = useDispatch();

  const productDetails = useSelector((state) => state.getProductDetails);
  const { loading, error, product } = productDetails;

  useEffect(() => {
    if (product && match.params.id !== product._id) {
      dispatch(getProductDetails(match.params.id));
    }
  }, [dispatch, match, product]);

  const addToCartHandler = () => {
    dispatch(addToCart(product._id, qty));
    // history.push(`/cart`);
  };
  const [show, setShow] = useState(false);
  return (
    <div className="product-screen">
      {loading ? (
        <div className="loading">
          <img src="https://lingojam.com/img/loading_nice.gif"/>
          <h2>Mohon Tunggu...</h2>
        </div>
      ) : error ? (
        <h2>{error}</h2>
      ) : (
        <>
      <div className="productside-left">
        <div className="left-image">
          <img src={product.imageUrl}/>
        </div>
      </div>
      <div className="productside-right">
        <h1 className="name">{product.name}</h1>

          <p className="left">Harga</p>
          <h2 className="right"><CurrencyFormat value={product.price} displayType={'text'} thousandSeparator={true} prefix={'Rp '} renderText={value => <span>{value}</span>} /></h2> 
          <p className="left-color">Warna</p>
            <div className="right-color">
                <p >Pilih variant</p>
                <ul>
                  <li>merah</li>
                  <li>kuning</li>
                  <li>hijau</li>
                </ul>
            </div>
          <p className="left-size">Ukuran</p>
          <div className="right-size">
              <p>Pilih Varian</p>
              <ul>
                <li>S</li>
                <li>X</li>
                <li>XL</li>
                <li>XXL</li>
              </ul>
          </div>

      </div>
      <footer>
        <div className="button" onClick =  {() => {addToCartHandler();setShow(true);}}>
          Tambah Ke Keranjang
        </div>
      </footer>
          <Modal onClose={() => setShow(false)} show={show}>
              <CartScreen />
          </Modal>
        </>
      )}
    </div>
  );
};

export default ProductScreen;
