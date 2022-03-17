import './productCard.css';


import { CartButton, WishButton } from '../../../components/Buttons';
import { Link } from "react-router-dom";

export const ProductCard = ({ product }) => {
  return (
    <div className="card new-product-card" key={product._id}>
      <div className="except-btn">

        <span className="prod-badge">{product.offer}</span>
        <div className="prod-img-dib">
          <img className="prod-img" src={product.image} alt="" />
        </div>

        
          <h3 className='product-name-cont'>
          <Link className="product-name" to={`/products/${product._id}`}>
            {product.name}
          </Link>
          </h3>
        
        <p className="author-name">{product.author}</p>
        
        <div  className="new-price">
        <p className="price-orig">₹{product.price}</p>
          <p className="price-orig-o" >
            ₹
            {Math.round(
              product.price - product.price * (product.discount / 100)
            )}
          </p>
          
          {/* <p>({product.discount}% off)</p> */}
        </div>

        <div className="oth-btn-container">
          <WishButton product={product} />
        </div>

      </div>

      <div className="prod-btns">
          <CartButton product={product} />
      </div>
    </div>
  );
};


export default ProductCard