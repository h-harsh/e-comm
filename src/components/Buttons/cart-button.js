import { Link } from "react-router-dom";
import { useCart } from "../Cart/cartContext";
import { useEffect, useState } from "react";
import axios from "axios";

export const CartButton = ({ product }) => {
  const { state, dispatch } = useCart();
  const [idArray, setIdArray] = useState([]);
  const baseUrl = "https://e-commerce-backend.harshporwal1.repl.co/cart";
  const [loading, setloading] = useState(false);

  useEffect(() => {
    setIdArray(
      state.map((item) => {
        return item.id || item._id;
      })
    );
  }, [state]);

  const addToCart = async (product) => {
    setloading(true);
    const response = await axios.post(`${baseUrl}`, { ...product, qty: 1 });
    if (response.status === 200) {
      dispatch({ type: "ADD_TO_CART", payload: product });
      setloading(false);
    }
    setloading(false);
  };

  return (
    <>
      {idArray.includes(product._id || product.id) ? (
        <Link to="/cart">
          <button className="btn btn-secondary">Go To Cart</button>
        </Link>
      ) : (
        <button
          className={product.inStock ? "btn btn-primary" : "btn btn-secondary"}
          disabled={product.inStock ? false : true}
          onClick={() => addToCart(product)}
        >
          {loading ? "Adding" : "Add to cart"}
        </button>
      )}
    </>
  );
};
