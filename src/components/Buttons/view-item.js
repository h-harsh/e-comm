import { Link } from "react-router-dom";

export const ViewItem = ({ product }) => {
  return (
    <Link to={`/products/${product._id}`} className="icon-btn"
    style={{color: "black", textDecorationLine:"none"}}
    >
      {" "}
      <i className="fas fa-binoculars"></i>{" "}
    </Link>
  );
};
