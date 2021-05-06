import {Link} from 'react-router-dom'

export const ViewItem = ({ product }) => {
    return (
        <Link to={`/${product._id}`} className="btn btn-primary"> View Details </Link>
        
    )
};
