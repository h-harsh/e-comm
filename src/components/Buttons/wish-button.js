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
      <button className="btn" onClick={() => removeFromWishList(product)} >
        ❤️
      </button>
      :
      <button className="btn" onClick={() => addToWishList(product)} >
        🤍
      </button>

    }
  </>
  );
};
