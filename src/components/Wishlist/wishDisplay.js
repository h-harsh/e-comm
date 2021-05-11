import { WishButton } from '../Buttons/wish-button';
import { CartButton } from '../Buttons/cart-button'
import {useWish} from './wishContext';

export const WishDisplay = () => {
  const { wishState } = useWish()
  return (
    <div style={{textAlign: "center"}}>
      {wishState.map((product) => {
        if (product) {
          return (
              <div style={{ display: "inline-block",  margin: "1.3rem", padding: "1rem"}}>
                <div className="card">
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
                    <CartButton product={product} />
                    <WishButton product={product} />
                  </div>
                </div>
              </div>
          )

        }
        return null
      })}
    </div>
  );
};
