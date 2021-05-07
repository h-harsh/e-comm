import {useCart} from '../Cart/cartContext'

export const CartButton = ({ product }) => {
    const { dispatch, cart } = useCart()
    return (
        <button
            className="btn btn-primary"
            onClick={() => dispatch({ type: "ADD", payload: product })}
        >Add to cart
        </button>
    );
};
