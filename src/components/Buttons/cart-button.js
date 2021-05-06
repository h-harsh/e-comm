import { CartContext } from '../Cart/cartContext'
import { useContext } from 'react'

export const CartButton = ({ product }) => {
    const { dispatch, cart } = useContext(CartContext);
    return (
        <button
            className="btn btn-primary"
            onClick={() => dispatch({ type: "ADD", payload: product })}
        >Add to cart
        </button>
    );
};
