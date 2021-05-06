import { useWish } from '../Wishlist/wishContext'

export const WishButton = ({ product }) => {
  const { addToWishList, wish } = useWish();
  return (
    <button className="btn" onClick={() => addToWishList(product)} >
      {wish.includes(product) ? "❤️" : "🤍"}
    </button>
  );
};
