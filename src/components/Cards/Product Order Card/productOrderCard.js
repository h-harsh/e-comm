import './productOrderCard.css'

import { baseurl } from "../../../utils/apiCalls";

export const ProductOrderCard = ({ product }) => {

  return (
    <div class="horiz-card horiz-card-order">
      <div class="horiz-prod">
        <div class="horiz-prod-sub">
          <div>
            <img class="horiz-prod-img horiz-prod-img-order " src={product.image} alt="" />
          </div>
          <div class="horiz-prod-sub-in">
            <h3 class="product-name">{product.name}</h3>
            <p class="brand-name">By:{product.author}</p>
            <p class="brand-name" >
              <span>Delivery:</span>{" "}
              {product.fastDelivery ? "Fast Delivery" : "Delayed"}
            </p>
            <p class="brand-name">Quantity: X {product.qty}</p>
          </div>
        </div>

        <div class="horiz-prod-price">
          <div class="horiz-prod-price1">₹ {product.price}</div>
        </div>
        
      </div>
    </div>
  );
};
