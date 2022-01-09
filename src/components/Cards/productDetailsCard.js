import { useState } from "react";
import { WishButton2, CartButton } from "../Buttons/index";
import "./cards.css";

export const ProductDetailsCard = ({ product }) => {
  const [arrow, setArrow] = useState("fas fa-chevron-up");
  return (
    <div className="out-box">
      <div className="product-details">
        <div className="container c-img">
          <img src={product.image} />
        </div>
        <div
          className={
            arrow === "fas fa-chevron-down"
              ? "container c-details big"
              : "container c-details small"
          }
        >
          <div className="title">
            <h3 className="title-brand">{product.author}</h3>
            <h1 className="title-name">{product.name}</h1>
          </div>
          <div>
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
          
          <div>
            <CartButton product={product} />
            <WishButton2 product={product} lg />
          </div>
          <div>
            <h3>Description</h3>
            <p>{product.description}</p>
          </div>
          <h3
            onClick={() =>
              setArrow(
                arrow === "fas fa-chevron-up"
                  ? "fas fa-chevron-down"
                  : "fas fa-chevron-up"
              )
            }
          >
            More details <i class={arrow}></i>{" "}
          </h3>
          <div
            className={
              arrow === "fas fa-chevron-up"
                ? "extra-details-hide"
                : "extra-details"
            }
          >
            <h3>PRODUCT DETAILS</h3>
            <p><span>Author:</span> {product.author} </p>
            <p><span>Publisher:</span>{product.publisher}</p>
            <p><span>Published:</span>{product.publishYear}</p>
            <p><span>ASIN:</span>{product.asins}</p>
            <p><span>Format:</span>{product.format}</p>

            <h3>Size & Fit</h3>
            <p><span>Best Sellers Rank:</span>{product.bestSellersRank}</p>
            <p><span>Ratings:</span>{product.ratings}</p>

            <h3>Material & Care </h3>
            <p><span>Pages:</span>{product.pages}</p>
            <p><span>Weight:</span>{product.weight}g</p>
            
          </div>
        </div>
      </div>
    </div>
  );
};
