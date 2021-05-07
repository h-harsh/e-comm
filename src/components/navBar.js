import { Link } from "react-router-dom";
import { ShoppingCartOutlined } from '@ant-design/icons';
import { HeartOutlined } from '@ant-design/icons';
import { useCart } from './Cart/cartContext'
import { useWish } from './Wishlist/wishContext'

export const NavBar = () => {
    const { cart } = useCart()
    const { wish } = useWish()
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
                        <span class="icon-count icon-count-sm red-light ">{cart.length}</span>
                    </div>
                </Link>
                <Link className="nav-items" to="/wishlist">
                    <div class="icon-div">
                        <HeartOutlined />
                        <span class="icon-count icon-count-sm red-light ">{wish.length}</span>
                    </div>
                </Link>
            </ul>
        </div>

    )
}
