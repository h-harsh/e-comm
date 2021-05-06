import {CartDisplay} from '../components/Cart/cartDisplay'

export const Cart = () => {
    return(
        <div>
            <h1 className="page-title" >Items in Cart</h1>
            <CartDisplay />
        </div>
    )
}