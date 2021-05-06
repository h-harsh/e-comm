import { createContext, useReducer, useEffect, useState } from "react";
import axios from 'axios'

export const FilterContext = createContext();

export const FilterProvider = ({ children }) => {
  const [products, setProducts] = useState([])
  const [{ fastDeliveryOnly, showAll, sortBy }, dispatch] = useReducer(
    filterFunc,
    {
      fastDeliveryOnly: false,
      showAll: true,
      sortBy: null
    }
  );
  
  useEffect(() => {
    axios.get('https://e-commerce-backend.harshporwal1.repl.co/products')
    .then(response => setProducts(response.data.products))
  }, [])

  const sortingData = (productsList, sortBy) => {
    if (sortBy === "HIGH-TO-LOW") {
      return productsList.sort((a, b) => a.price - b.price);
    }
    if (sortBy === "LOW-TO-HIGH") {
      return productsList.sort((a, b) => b.price - a.price);
    }
    return productsList;
  };

  const filteringData = (productsList, fastDeliveryOnly, showAll) => {
    return productsList
      .filter((item) => {
        return fastDeliveryOnly ? item.fastDelivery : true;
      })
      .filter((item) => {
        return showAll ? true : item.inStock;
      });
  };

  const sortedData = sortingData(products, sortBy);
  const filteredData = filteringData(sortedData, fastDeliveryOnly, showAll);

  return (
    <FilterContext.Provider value={{ filteredData, dispatch }}>
      {children}
    </FilterContext.Provider>
  );
};

const filterFunc = (state, { type, payload }) => {
  switch (type) {
    case "SORT":
      return { ...state, sortBy: payload };
    case "SHOW-IN-STOCK-ONLY":
      return { ...state, showAll: !state.showAll };
    case "FAST-DELIVERY":
      return { ...state, fastDeliveryOnly: !state.fastDeliveryOnly };
    default:
      break;
  }
};
