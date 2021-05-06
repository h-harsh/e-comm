import { useContext } from 'react'
import { Link, useParams } from 'react-router-dom';
import { FilterContext } from '../components/Filters/filterContext'
import {CartButton} from '../components/Buttons/cart-button'
import {WishButton} from '../components/Buttons/wish-button'


export const ProductDetails = () => {
    const { productId } = useParams();
    const { filteredData } = useContext(FilterContext);

    function getProductDetails(videos, videoId) {
        return videos.find((video) => video._id === videoId);
    }
    const product = getProductDetails(filteredData, productId);
    return (
        <div style={{margin: " 10% 25%"}}>
        <div class="card-horiz">
    	<span class="prod-badge">{product.offer}</span>
        <img class="prod-img-horiz" src={product.image} alt="" />
		<div class="card-sub-div-horiz">
        	<h3>{product.name}</h3>
            <div class="price">
            	<p>{product.price}</p>
                <p class="price-orig">₹ 1599</p>
                <p>(45% off)</p>
            </div>
            <p>{product.material}</p>

            <p>{product.ratings}</p>
            <div class="prod-btns">
            	 <CartButton product={product} />
                <WishButton product={product} />
            </div>
        </div>
	</div>
    </div>
    )
}