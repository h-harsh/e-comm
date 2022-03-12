import { Link } from "react-router-dom";
import "./category.style.css";
import { CardWPhotoTitle } from "../../../New Components";
import { PrimaryButton } from "../../../New Components";

 const CategoryDisplay = ({ data, title }) => {
  return (
    <div className="section-container">
      <div className="section-title-cont">
        <hr className="section-title-line" />
        <h3 className="section-title ">{title}</h3>
        <hr className="section-title-line" />
      </div>
      <div className="card-holder" style={{marginTop:'3rem', marginBottom:'2rem'}} >
        {data.map((item) => {
          return (
            <CardWPhotoTitle
              title={item.title}
              name={item.name}
              image={item.image}
            />
          );
        })}
      </div>
      <Link to="/products" className="center-button-container">
        <PrimaryButton text={"Get your Book"} />
      </Link>
    </div>
  );
};

export default CategoryDisplay