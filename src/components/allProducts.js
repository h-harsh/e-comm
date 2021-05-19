import {useFilter} from './Filters/filterContext'
import {ProductCard} from './Cards/producrCard'
import { useState } from 'react';
import '../App.css'

export const ProductsDisplay = () => {
  const { searchedFilteredData } = useFilter();
  const[status, setStatus] = useState(false);
  console.log(searchedFilteredData)

  return (
    <div style={{textAlign: "center"}} >
      { searchedFilteredData.length === 0 ? 
      <div className="loader-prod" >
      Loading....
    </div>
    :
      (searchedFilteredData.map((product) => {
        return (
          <ProductCard product={product} viewBtn wishBtn cartBtn />
        );
      })) 
      
      }
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
