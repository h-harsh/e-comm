import { Link } from "react-router-dom";
import { useCart } from "../Cart/cartContext";
import { useEffect, useState } from "react";
import axios from "axios";
import { baseurl } from "../../utils/apiCalls";
import { useAuth } from "../../Auth/authContetxt";
import { InToast } from "../Toast/toast";

export const CartButton = ({ product }) => {
  const { state, dispatch } = useCart();
  const [idArray, setIdArray] = useState([]);
  const [loading, setloading] = useState(false);
  const [toastStatus, setToastStatus] = useState(false)
  const {token} = useAuth();

  useEffect(() => {
    setIdArray(
      state.map((item) => {
        return item.id || item._id;
      })
    );
  }, [state]);

  const addToCart = async (product) => {
    console.log(product)
    setloading(true);
    const response = await axios.post(`${baseurl}/cart/${product._id}`, { });
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
          <button className="nm-btn2">Go To Cart</button>
        </Link>
      ) : (
        <button
          className={product.inStock ? "sp-button" : "nm-btn2 btn2-disabled"}
          disabled={product.inStock ? false : true}
          // onClick={() => addToCart(product)}
          onClick={token ? () => addToCart(product) : () => setToastStatus(true) }
        >
          <span>{loading ? "Adding" : "Add to cart"}</span>
        </button>
      )}
      {toastStatus ? ( <div onClick={() => setToastStatus(false)}> <InToast value={true} text={"You need to login"} /> </div> ) : null}
    </>
  );
};
