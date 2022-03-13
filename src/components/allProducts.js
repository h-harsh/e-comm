import { useFilter } from "./Filters/filterContext";
// import { ProductCard } from "./Cards/producrCard";
import "../App.css";
import Loader from "react-loader-spinner";
import { ProductCard } from "../New Components/Cards";

export const ProductsDisplay = () => {
  const { searchedFilteredData, products } = useFilter();
  console.log(searchedFilteredData);
  return (
    <div style={{ textAlign: "center" }}>
      {searchedFilteredData.length === 0 && products.length > 1 ? (
        <div className="loader-prod">No match found</div>
      ) : null}

      {products.length === 0 ? (
        <div className="loader-prod">
          <Loader type="ThreeDots" color="black" height={100} width={100} />
        </div>
      ) : (
        searchedFilteredData.map((product) => {
          return <ProductCard product={product} />;
        })
      )}
    </div>
  );
};
