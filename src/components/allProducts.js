import {useFilter} from './Filters/filterContext'
import {ProductCard} from './producrCard'

export const ProductsDisplay = () => {
  const { searchedFilteredData } = useFilter();

  return (
    <div style={{textAlign: "center"}} >
      {searchedFilteredData.map((product) => {
        return (
          <ProductCard product={product} viewBtn wishBtn cartBtn />
        );
      })}
    </div>
  );
};


// export const ProductsDisplay = () => {
//   const { filteredData } = useFilter()

//   return (
//     <div style={{textAlign: "center"}} >
//       {filteredData.map((product) => {
//         return (
//           <ProductCard product={product} viewBtn wishBtn />
//         );
//       })}
//     </div>
//   );
// };
