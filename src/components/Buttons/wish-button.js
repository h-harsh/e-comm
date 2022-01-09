import { useWish } from '../Wishlist/wishContext'
import { useState, useEffect } from 'react';
import { useAuth } from "../../Auth/authContetxt";
import { InToast } from "../Toast/toast";


export const WishButton = ({ product }) => {
  const { addToWishList, removeFromWishList, wishState } = useWish();
  const [idArray, setIdArray] = useState([])
  const [toastStatus, setToastStatus] = useState(false)
  const {token} = useAuth();

  useEffect(() => {
    setIdArray(wishState.map(item => {
      return item.id || item._id
    }))
  }, [wishState])

  return (<>
    { idArray.includes(product._id || product.id) ?
      <button className="icon-btn"
      //  onClick={() => removeFromWishList(product)} 
       onClick={token ? () => removeFromWishList(product) : () => setToastStatus(true) }
       >
        <i class="fas fa-heart"></i>
      </button>
      :
      <button className="icon-btn" 
      // onClick={() => addToWishList(product)} 
      onClick={token ? () => addToWishList(product) : () => setToastStatus(true) }
      >
        <i class="far fa-heart"></i>
      </button>

    }
    {toastStatus ? ( <div onClick={() => setToastStatus(false)}> <InToast value={true} text={"You need to login"} /> </div> ) : null}
  </>
  );
};

export const WishButton2 = ({ product, lg}) => {
  const { addToWishList, removeFromWishList, wishState } = useWish();
  const [idArray, setIdArray] = useState([])
  const [toastStatus, setToastStatus] = useState(false)
  const {token} = useAuth();

  useEffect(() => {
    setIdArray(wishState.map(item => {
      return item.id || item._id
    }))
  }, [wishState])


  return (<>

    { idArray.includes(product._id || product.id) ?
      <button className={lg ? "nm-btn2": "nm-btn2 horiz" }
      //  onClick={() => removeFromWishList(product)}
       onClick={token ? () => removeFromWishList(product) : () => setToastStatus(true) }
       >
        <i class="fas fa-heart"></i>
      </button>
      :
      <button className={lg ? "nm-btn2": "nm-btn2 horiz" } 
      // onClick={() => addToWishList(product)}
      onClick={token ? () => addToWishList(product) : () => setToastStatus(true) }
      > 
     <i class="far fa-heart"></i> 
    </button> 
    }
  {toastStatus ? ( <div onClick={() => setToastStatus(false)}> <InToast value={true} text={"You need to login"} /> </div> ) : null}
  </>
  );
};


