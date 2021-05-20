import { CartButton, WishButton, ViewItem } from "../Buttons/index";

export const ProductCard = ({
  product
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
        <p className="brand-name">{product.brand}</p>
        <h3 className="product-name">{product.name}</h3>
        <div style={{textAlign:"left"}} className="price">
          <p>₹ {Math.round(product.price - (product.price * (product.discount/100)))} </p>
          <p className="price-orig">₹{product.price}</p>
          <p>({product.discount}% off)</p>
        </div>

        <div className="oth-btn-container">
          {/* <button className="icon-btn">
            <i className="far fa-heart"></i>
          </button>
          <button className="icon-btn">
            <i className="fas fa-binoculars"></i>
          </button> */}
          <ViewItem product={product} />
           <WishButton product={product} />
        </div>
      </div>

      <div className="prod-btns">
        <div className="sp-button-container">
          {/* <button className="sp-button">
            <span> Add To Cart</span>
          </button> */}
           <CartButton product={product} />
        </div>
      </div>
    </div>
  );
};
