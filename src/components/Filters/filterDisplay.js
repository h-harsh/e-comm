import {useFilter} from './filterContext'
import './filter.css'

export const FilterDisplay = () => {
  const { dispatch } = useFilter()
  return (
    <div className='filter-box'>
      <fieldset>
        <legend>Sort by Price</legend>
        <label>
          <input
            type="radio"
            name="sort"
            onChange={() => dispatch({ type: "SORT", payload: "HIGH-TO-LOW" })}
          />
          High to low
        </label>
        <label>
          <input
            type="radio"
            name="sort"
            onChange={() => dispatch({ type: "SORT", payload: "LOW-TO-HIGH" })}
          />
          Low to High
        </label>
      </fieldset>
      <fieldset>
        <legend>More Filters</legend>
        <label>
          <input
            type="checkbox"
            name="filter"
            onChange={() => dispatch({ type: "FAST-DELIVERY" })}
          />
          Fast Delivery Only
        </label>
        <label>
          <input
            type="checkbox"
            name="filter"
            onChange={() => dispatch({ type: "SHOW-IN-STOCK-ONLY" })}
          />
          In Stock only
        </label>
      </fieldset>
    </div>
  );
};
