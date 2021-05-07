import { useParams } from 'react-router-dom';
import {useFilter} from '../components/Filters/filterContext'
import {CartButton} from '../components/Buttons/cart-button'
import {WishButton} from '../components/Buttons/wish-button'


export const ProductDetails = () => {
    const { productId } = useParams();
    const { filteredData } = useFilter()

    function getProductDetails(videos, videoId) {
        return videos.find((video) => video._id === videoId);
    }
    const product = getProductDetails(filteredData, productId);
    return (
        <div style={{margin: " 10% 25%"}}>
        <div className="card-horiz">
    	<span className="prod-badge">{product.offer}</span>
        <img className="prod-img-horiz" src={product.image} alt="" />
		<div className="card-sub-div-horiz">
        	<h3>{product.name}</h3>
            <div className="price">
            	<p>{product.price}</p>
                <p className="price-orig">₹ 1599</p>
                <p>(45% off)</p>
            </div>
            <p>{product.material}</p>

            <p>{product.ratings}</p>
            <div className="prod-btns">
            	 <CartButton product={product} />
                <WishButton product={product} />
            </div>
        </div>
	</div>
    </div>
    )
}