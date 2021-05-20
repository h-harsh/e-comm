import {ProductCard} from '../Cards/producrCard'
import {useWish} from './wishContext';
import {Loader} from '../Loader/loader'

export const WishDisplay = () => {
  const { wishState } = useWish()
  console.log(  wishState)
  return (
    <div style={{textAlign: "center"}}>
      { wishState.length < 1 ? <Loader text={"Jaa yhase"} />
      :
      wishState.map((product) => {
          return (
              <ProductCard product={product} />
          )
      })
      }
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