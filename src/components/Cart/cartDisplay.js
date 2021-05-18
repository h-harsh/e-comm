
import {ProductCard} from '../Cards/producrCard'
import {useCart} from './cartContext'
import {CartCard} from '../Cards/cartProductCard'

export const CartDisplay = () => {
  const { state} = useCart();
  return (
    <div>
      {state.map((product) => {
        return (
          <CartCard  product={product} cartFunc/>
        )
      })}
    </div>
  );
};


