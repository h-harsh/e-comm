import './common.css'
import { FilterDisplay } from "../components/Filters/filterDisplay";
import { ProductsDisplay } from "../components/allProducts";
import { Footer } from "../components/Footer/footer";
import { SearchBar } from "../components/Search bar/searchBar";

export const Products = () => {
  return (
    <>
      <div className="input-filed-cont">
      <SearchBar className="input-filed" />
      </div>
      <div className="grid-cont bg-color-light">
        <div className="prod-grid-item">
          <FilterDisplay />
        </div>
        <div className="prod-grid-item bg-color-light">
          <ProductsDisplay />
        </div>
      </div>
      <Footer />
    </>
  );
};
