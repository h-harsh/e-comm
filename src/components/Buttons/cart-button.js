import { Link } from 'react-router-dom';
import { useCart } from '../Cart/cartContext'
import {useEffect, useState} from 'react'

export const CartButton = ({ product }) => {
    const { state, addToCart } = useCart()
    const [idArray, setIdArray] = useState([])

    useEffect(() => {
        setIdArray(state.map(item => {
          return item.id || item._id
        }))
      }, [state])
      
    return (<>
        {
            idArray.includes(product._id || product.id) ?
            <Link to="/cart" > 
            <button className="btn btn-secondary"
                >Go To Cart</button>
            </Link>
                :
                <button 
                    className={product.inStock ? "btn btn-primary": "btn btn-secondary"}
                    disabled={product.inStock ? false: true}
                    onClick={() => addToCart(product)}
                >{product.inStock ? "Add To Cart": "Out Of Stock"}
                </button>
        }
    </>);
};


