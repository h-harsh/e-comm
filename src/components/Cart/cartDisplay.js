
import {ProductCard} from '../producrCard'
import {useCart} from './cartContext'

export const CartDisplay = () => {
  const { state} = useCart();
  return (
    <div style={{ textAlign: "center" }}>
      {state.map((product) => {
        return (
          <ProductCard  product={product} cartFunc/>
        )
      })}
    </div>
  );
};


