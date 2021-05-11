import { Link } from "react-router-dom";
import { ShoppingCartOutlined } from '@ant-design/icons';
import { HeartOutlined } from '@ant-design/icons';
import { useCart } from './Cart/cartContext'
import { useWish } from './Wishlist/wishContext'

export const NavBar = () => {
    const { state } = useCart()
    const { wishState } = useWish()
    return (
        <div className="nav-bar">
            <ul className="nav-list">
                <Link className="nav-items" to="/">
                    Products
                    </Link>
            </ul>
            <h1 className="main-title">E-Commerce</h1>
            <ul className="nav-list">
                <Link className="nav-items" to="/cart">
                    {/* Cart {cart.length} */}
                    <div class="icon-div">
                        <ShoppingCartOutlined />
                        <span class="icon-count icon-count-sm red-light ">{state.length}</span>
                    </div>
                </Link>
                <Link className="nav-items" to="/wishlist">
                    <div className="icon-div">
                        <HeartOutlined />
                        <span className="icon-count icon-count-sm red-light ">{wishState.length}</span>
                    </div>
                </Link>
            </ul>
        </div>

    )
}
