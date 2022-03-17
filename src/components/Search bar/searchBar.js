import { useFilter } from "../Filters/filterContext";
import './serachBar.css'

export const SearchBar = ({className}) => {
  const { setStatus, status } = useFilter();

  return (
    <>
      {/* { window.location.href === "https://finstore.netlify.app/products" ? ( */}
        <input

          className={className}
          type="text"
          placeholder="Search items..."
          onChange={(event) => setStatus(event.target.value)}
          value={status}
        />
      {/* ) : null} */}
      <button
      className="btn clear-button-searchbar"
      onClick={() => setStatus("")}
      >Clear</button>
    </>
  );
};
