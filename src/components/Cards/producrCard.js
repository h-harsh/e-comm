import { CartButton, WishButton, ViewItem } from "../Buttons/index";
import { Link } from "react-router-dom";

export const ProductCard = ({ product }) => {
  return (
    <div style={{ display: "inline-block" }} className="card" key={product._id}>
      <div className="except-btn">
        <span className="prod-badge">{product.offer}</span>
        <div className="prod-img-dib">
          <img className="prod-img" src={product.image} alt="" />
        </div>
        <p className="brand-name">By:{product.author}</p>
        <h3>
          <Link className="product-name" to={`/products/${product._id}`}>
            {product.name}
          </Link>
        </h3>
        <div style={{ textAlign: "left" }} className="price">
          <p>
            ₹{" "}
            {Math.round(
              product.price - product.price * (product.discount / 100)
            )}{" "}
          </p>
          <p className="price-orig">₹{product.price}</p>
          <p>({product.discount}% off)</p>
        </div>

        <div className="oth-btn-container">
          <WishButton product={product} />
        </div>
      </div>

      <div className="prod-btns">
        <div className="sp-button-container">
          <CartButton product={product} />
        </div>
      </div>
    </div>
  );
};
