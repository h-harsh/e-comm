import { Link } from 'react-router-dom'
import './wideBannerDisplay.css'

const WideBannerDisplay = () => {
    return(
        <div className='widebanner-img' >
            <p className='widebanner-title' >Browse Through Our Complete library</p>
            <Link to="/products"  className='widebanner-button' >BROWSE COLLECTION >  </Link>
        </div>
    )
}

export default WideBannerDisplay