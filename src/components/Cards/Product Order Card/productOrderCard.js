import './productOrderCard.css'

import { baseurl } from "../../../utils/apiCalls";

export const ProductOrderCard = ({ product }) => {

  return (
    <div class="horiz-card horiz-card-order">
      <div class="horiz-prod">
        <div class="horiz-prod-sub">
          <div>
            <img class="horiz-prod-img" src={product.image} alt="" />
          </div>
          <div class="horiz-prod-sub-in">
            <p class="brand-name">{product.brand}</p>
            <h3 class="product-name">{product.name}</h3>
            <p class="prod-desc">There's a product description always available</p>
          </div>
        </div>

        <div class="horiz-prod-price">
          <div class="horiz-prod-price1">₹ {product.price}</div>
        </div>
        
      </div>
    </div>
  );
};
