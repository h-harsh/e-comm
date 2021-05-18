import { Link } from "react-router-dom";

export const ViewItem = ({ product }) => {
  return (
    <Link to={`/${product._id}`} className="icon-btn"
    style={{color: "black"}}
    >
      {" "}
      <i className="fas fa-binoculars"></i>{" "}
    </Link>
  );
};
