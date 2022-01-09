// import { createContext, useContext, useEffect, useState } from "react";
// import { ProductCard } from "../producrCard";
// import { useFilter } from "../Filters/filterContext";

// export const SearchContext = createContext();

// export const SearchProvider = ({ children }) => {
//   // const  filteredData  = useFilter();
// //   const [status, setStatus] = useState("");
//   //   console.log(filteredData, "hii");

// //   const searchedFilteredDataFunc = (filteredDatas) => {
// //     return filteredDatas.filter((value) => {
// //       if (value.name.toLowerCase().includes(status.toLocaleLowerCase())) {
// //         return value;
// //       }
// //       return null;
// //     });
// //   };

//   //   const searchedFilteredData = searchedFilteredDataFunc(filteredData);
//   //   console.log(searchedFilteredData);
//   return (
//     <SearchContext.Provider
//       value={{
//         // setStatus,
//         // searchedFilteredData,
//       }}
//     >
//       {children}
//     </SearchContext.Provider>
//   );
// };

// export const useSearch = () => {
//   return useContext(SearchContext);
// };

// // const searchedFilteredDataFunc = (filteredData) => {
// //     return filteredData.filter(value => {
// //         if(value.name.toLowerCase().includes(status.toLocaleLowerCase())){
// //             return value
// //         } return null
// //     }).map(item => {
// //         return (<ProductCard  product={item} viewBtn wishBtn />)
// //     })
