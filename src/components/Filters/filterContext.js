import {
  createContext,
  useReducer,
  useEffect,
  useState,
  useContext,
} from "react";
import { filterFunc } from "./filterReducer";
import axios from "axios";

export const FilterContext = createContext();

export const FilterProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [status, setStatus] = useState("");
  const [{ fastDeliveryOnly, showAll, sortBy }, dispatch] = useReducer(
    filterFunc,
    {
      fastDeliveryOnly: false,
      showAll: true,
      sortBy: null,
    }
  );

  useEffect(() => {
    axios
      .get("https://e-commerce-backend.harshporwal1.repl.co/products")
      .then((response) => setProducts(response.data.products));
  }, []);

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

  const searchedFilteredDataFunc = (filteredDatas) => {
    return filteredDatas.filter((value) => {
      if (value.name.toLowerCase().includes(status.toLocaleLowerCase())) {
        return value;
      }
      return null;
    });
  };
const searchedFilteredData = searchedFilteredDataFunc(filteredData)

  return (
    <FilterContext.Provider value={{ searchedFilteredData, dispatch, products, setStatus, status }}>
      {children}
    </FilterContext.Provider>
  );
};

export const useFilter = () => {
  return useContext(FilterContext);
};
