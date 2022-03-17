import "./featuredProductDisplay.css";
import { useFilter } from "../../../components/Filters/filterContext";
import { ProductCard } from "../../../New Components";

const FeaturedProductDisplay = ({title}) => {
  const { products } = useFilter();
  return (
    <div className="section-container feat-prod-display">
      <div className="section-title-cont">
        <hr className="section-title-line" />
        <h3 className="section-title cl-white">{title}</h3>
        <hr className="section-title-line" />
      </div>
      <div className="card-holder card-holder-full" >
    {
        products.slice(7).map(item => {
            return( <ProductCard product={item} />)
        })
    }
      </div>
    </div>
  );
};

export default FeaturedProductDisplay;
