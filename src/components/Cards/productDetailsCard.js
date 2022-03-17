
import { WishButton2, CartButton } from "../Buttons/index";
import "./cards.css";

export const ProductDetailsCard = ({ product }) => {
  return (
    <div className="out-box">
      <div className="product-details">
        <div className="product-details-sub">
          <div className=" c-img">
            <img className="d-img " src={product.image} alt="error"/>
          </div>
          <div className={"container c-details big"}>
            <div className="title">
              <h3 className="title-brand">{product.author}</h3>
              <h1 className="title-name">{product.name}</h1>
            </div>
            {/* <div>
            <p>
              <span>Availability:</span>{" "}
              {product.inStock ? "In Stock" : "Out of Stock"}{" "}
            </p>
            <p>
              <span>Delivery:</span>{" "}
              {product.fastDelivery ? "Fast Delivery" : "Delayed"}
            </p>
            <p>
              <span>Language:</span> {product.language}
            </p>
          </div> */}
            <div>
              <p className="small-desc">
                Timeless lessons on wealth, greed, and happiness doing well with
                money isn’t necessarily about what you know. It’s about how you
                behave. And behavior is hard to teach, even to really smart
                people. How to manage money, invest it, and make business
                decisions are typically considered to involve a lot of
                mathematical calculations,
              </p>
            </div>
            <div className="prices">
              <p className="dis-price">
                ₹{" "}
                {Math.round(
                  product.price - product.price * (product.discount / 100)
                )}{" "}
              </p>
              <p className="price-orig">₹{product.price}</p>
              <p className="dis">({product.discount}% off)</p>
            </div>

            <div className="prod-display-btn-cont">
              <CartButton product={product} />
              <WishButton2 product={product} lg />
            </div>
          </div>
        </div>
        <div className="prod-display-extra-cont">
          <div className={"extra-details prod-display-extra-cont-2"}>
            <h3 className="some-title">Product Details</h3>
            <p className="even-p">
              <span className="even-span">Author:</span> {product.author}{" "}
            </p>
            <p className="odd-p">
              <span className="odd-span">Publisher:</span>
              {product.publisher}
            </p>
            <p className="even-p">
              <span className="even-span">Published:</span>
              {product.publishYear}
            </p>
            <p className="odd-p">
              <span className="odd-span">ASIN:</span>
              {product.asins}
            </p>
            <p className="even-p">
              <span className="even-span">Format:</span>
              {product.format}
            </p>

            <h3 className="some-title">Size & Fit</h3>
            <p className="odd-p">
              <span className="odd-span">Best Sellers Rank:</span>
              {product.bestSellersRank}
            </p>
            <p className="even-p">
              <span className="even-span">Ratings:</span>
              {product.ratings}
            </p>

            <h3 className="some-title">Material & Care </h3>
            <p className="odd-p">
              <span className="odd-span">Pages:</span>
              {product.pages}
            </p>
            <p className="even-p">
              <span className="even-span">Weight:</span>
              {product.weight}g
            </p>
          </div>
          <div className="prod-display-extra-cont-1">
            <h3 className="some-title">Description</h3>
            <p className="some-title-desc">{product.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

