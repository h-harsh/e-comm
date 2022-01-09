import { useFilter } from "../Filters/filterContext";
import { baseurl } from "../../utils/apiCalls";

export const SearchBar = () => {
  const { setStatus, status } = useFilter();

  return (
    <>
      { window.location.href === "https://finstore.netlify.app/products" ? (
        <input
          className="search-thing"
          type="text"
          placeholder="Search items..."
          onChange={(event) => setStatus(event.target.value)}
          value={status}
        />
      ) : null}
      {/* <button
      className="btn btn-link1"
      onClick={() => setStatus("")}
      >X</button> */}
    </>
  );
};
