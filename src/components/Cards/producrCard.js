import { CartButton, WishButton, ViewItem } from "../Buttons/index";

export const ProductCard = ({
  product,
  viewBtn,
  wishBtn,
  cartBtn,
  cartFunc,
}) => {
  
  return (
    <div style={{ display: "inline-block", margin: "2rem" }} className="card" key={product._id}>
      <div className="except-btn">
        <span className="prod-badge">{product.offer}</span>
        <div className="prod-img-dib">
          <img
            className="prod-img"
            src={product.image}
            alt=""
          />
        </div>
        <p className="brand-name">Brand nam</p>
        <h3 className="product-name">{product.name}</h3>
        <div className="price">
          <p>₹{product.price}</p>
          <p className="price-orig">₹ 1599</p>
          <p>(45% off)</p>
        </div>

        <div className="oth-btn-container">
          {/* <button className="icon-btn">
            <i className="far fa-heart"></i>
          </button>
          <button className="icon-btn">
            <i className="fas fa-binoculars"></i>
          </button> */}
          {viewBtn && <ViewItem product={product} />}
          {wishBtn && <WishButton product={product} />}
        </div>
      </div>

      <div className="prod-btns">
        <div className="sp-button-container">
          {/* <button className="sp-button">
            <span> Add To Cart</span>
          </button> */}
          {cartBtn && <CartButton product={product} />}
        </div>
      </div>
    </div>
  );
};
