// import {ProductCard} from '../Cards/producrCard'
import {ProductCard} from '../../New Components'
import {useWish} from './wishContext';
import {Loader} from '../Loader/loader'

export const WishDisplay = () => {
  const { wishState } = useWish()
  console.log(  wishState)
  return (
    <div style={{textAlign: "center"}}>
      { wishState?.length < 1 ? <Loader text={"Start Wishlisting"} />
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

