import { WishButton } from '../Buttons/wish-button';
import { CartButton } from '../Buttons/cart-button'
import {useWish} from './wishContext';

export const WishDisplay = () => {
  const { wish } = useWish()
  return (
    <div style={{textAlign: "center"}}>
      {wish.map((product) => {
        if (product) {
          return (
              <div style={{ display: "inline-block",  margin: "1.3rem", padding: "1rem"}}>
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
