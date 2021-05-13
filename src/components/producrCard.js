import { CartButton, WishButton, ViewItem } from "./Buttons/index";
import { useCart } from "./Cart/cartContext";
import axios from "axios";
import { useState } from "react";

export const ProductCard = ({
  product,
  viewBtn,
  wishBtn,
  cartBtn,
  cartFunc
}) => {
  const { dispatch } = useCart();
  const baseUrl = "https://e-commerce-backend.harshporwal1.repl.co/cart";
  const [remove, setRemove] = useState(false)
  const [add, setAdd] = useState(false);
  const [less, setLess] = useState(false);

//   Cart Functions
  const increaseQuantity = async (product) => {
      setAdd(true)
    const response = await axios.post(`${baseUrl}/${product._id}`, {
      qty: product.qty + 1,
    });
    if (response.status === 200) {
      dispatch({ type: "INCREASE_QTY", payload: product });
      setAdd(false)
    }
    setAdd(false)
  };

  const decreaseQuantity = async (product) => {
    if (product.qty > 1) {
        setLess(true)
      const response = await axios.post(`${baseUrl}/${product._id}`, {
        qty: product.qty - 1,
      });
      if (response.status === 200) {
        dispatch({ type: "DECREASE_QTY", payload: product });
      }
    } else {
      removeFromCart(product);
    }setLess(false)
  };

  const removeFromCart = async (product) => {
    setRemove(true);
    const response = await axios.delete(`${baseUrl}/${product._id}`);
    if (response.status === 200) {
      dispatch({ type: "REMOVE_FROM_CART", payload: product });
      setRemove(false);
    }
    setRemove(false);
  };


  return (
    <div style={{ display: "inline-block", margin: "1.3rem", padding: "1rem" }}>
      <div key={product.id} className="card">
        <span className="prod-badge">{product.offer}</span>
        <img className="prod-img" src={product.image} alt="" />
        <h3>{product.name}</h3>
        {product.inStock && <div> In Stock </div>}
        {!product.inStock && <div> Out of Stock </div>}
        {product.fastDelivery ? (
          <div> Fast Delivery </div>
        ) : (
          <div> 3 days minimum </div>
        )}

        <div className="price">
          <p>₹ {product.price}</p>
        </div>

        <p>Rating {product.ratings}</p>

        <div className="prod-btns">
          {viewBtn && <ViewItem product={product} />}
          {wishBtn && <WishButton product={product} />}
          {cartBtn && <CartButton product={product} />}
        </div>
        {cartFunc && (
          <div>
            <div className="prod-btns">
              <button
                className="btn btn-primary"
                onClick={() => decreaseQuantity(product)}
              >
                {less ? "O": "-"}
              </button>
              <p> Quantity {product.qty}</p>
              <button
                className="btn btn-primary"
                onClick={() => increaseQuantity(product)}
              >
                {add ? "O": "+"}
              </button>
            </div>
            <button
              className="btn btn-secondary"
              onClick={() => removeFromCart(product)}
            >
              {remove ? "removing": "Remove"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
