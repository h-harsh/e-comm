import {ProductCard} from '../Cards/producrCard'
import {useWish} from './wishContext';

export const WishDisplay = () => {
  const { wishState } = useWish()
  console.log(  wishState)
  return (
    <div style={{textAlign: "center"}}>
      {wishState.map((product) => {
          return (
              <ProductCard product={product} cartBtn wishBtn  />
          )
      })}
    </div>
  );
};









// export const WishDisplay = () => {
//   const { wishState } = useWish()
//   console.log(wishState)
//   return (
//     <div style={{textAlign: "center"}}>
//       {wishState.map((product) => {
//         if (product) {
//           return (
//               <ProductCard product={product} cartBtn wishBtn  />
//           )
//         }
//         return null
//       })}
//     </div>
//   );
// };