import {useCart} from './cartContext'

export const CartDisplay = () => {
  const { state, dispatch, cart } = useCart()

  return (
    <div style={{textAlign: "center"}}>
      {cart.map((product) => {
        return (
          <div style={{ display: "inline-block", margin: "1.3rem", padding: "1rem" }}>
            <div class="card">
              <span class="prod-badge">{product.offer}</span>
              <img class="prod-img" src={product.image} alt="" />
              <h3>{product.name}</h3>
              {product.inStock && <div> In Stock </div>}
              {!product.inStock && <div> Out of Stock </div>}
              {product.fastDelivery ? (
                <div> Fast Delivery </div>
              ) : (
                <div> 3 days minimum </div>
              )}
              <div class="price">
                <p>₹ {product.price}</p>
              </div>
              <p>Rating {product.ratings}</p>
              <div class="prod-btns">
                <button
                  class="btn btn-primary"
                  onClick={() => dispatch({ type: "LESS1", payload: product })}
                >
                  -
                </button>
                <p> Quantity {product.qty}</p>
                <button
                  class="btn btn-primary"
                  onClick={() => dispatch({ type: "ADD1", payload: product })}
                >
                  +
                </button>
              </div>
              <button
                class="btn btn-secondary"
                onClick={() => dispatch({ type: "REMOVE", payload: product })}
              >
                Remove
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};
