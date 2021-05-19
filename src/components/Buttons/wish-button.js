import { useWish } from '../Wishlist/wishContext'
import { useState, useEffect } from 'react';

export const WishButton = ({ product }) => {
  const { addToWishList, removeFromWishList, wishState } = useWish();
  const [idArray, setIdArray] = useState([])

  useEffect(() => {
    setIdArray(wishState.map(item => {
      return item.id || item._id
    }))
  }, [wishState])


  return (<>
    { idArray.includes(product._id || product.id) ?
      <button className="icon-btn" onClick={() => removeFromWishList(product)} >
        <i class="fas fa-heart"></i>
      </button>
      :
      <button className="icon-btn" onClick={() => addToWishList(product)} >
        <i class="far fa-heart"></i>
      </button>

    }
  </>
  );
};

export const WishButton2 = ({ product, lg}) => {
  const { addToWishList, removeFromWishList, wishState } = useWish();
  const [idArray, setIdArray] = useState([])

  useEffect(() => {
    setIdArray(wishState.map(item => {
      return item.id || item._id
    }))
  }, [wishState])


  return (<>

    { idArray.includes(product._id || product.id) ?
      <button className={lg ? "nm-btn2": "nm-btn2 horiz" } onClick={() => removeFromWishList(product)} >
        <i class="fas fa-heart"></i>
      </button>
      :
      <button className={lg ? "nm-btn2": "nm-btn2 horiz" } onClick={() => addToWishList(product)}> 
     <i class="far fa-heart"></i> 
    </button> 
    }

  </>
  );
};


