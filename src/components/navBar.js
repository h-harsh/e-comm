// import { Home } from '../Pages/Home';
import { Products } from '../Pages/Products'
import { Cart } from '../Pages/Cart';
import { WishList } from '../Pages/WishList'
import {ProductDetails} from '../Pages/productDetails'
import { Routes, Route, Link } from "react-router-dom";
import {CartContext} from '../components/Cart/cartContext'
import {WishContext} from './Wishlist/wishContext'
import {useContext} from 'react';
import {ShoppingCartOutlined} from '@ant-design/icons';
import {HeartOutlined } from '@ant-design/icons';

export const NavBar = () => {
    const {cart } = useContext(CartContext);
    const { wish } = useContext(WishContext);
    return (
        <div classNameName="App">
            <div className="nav-bar">
                <ul className="nav-list">
                    {/* <Link className="nav-items" to="/">
                        Home
                    </Link> */}
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
            <Routes>
                {/* <Route path="/" element={<Home />} /> */}
                <Route path="/" element={<Products />} />
                <Route path="cart" element={<Cart />} />
                <Route path="wishlist" element={<WishList />} />
                <Route path="/:productId" element={<ProductDetails />} />
            </Routes>
        </div>
    )
}
