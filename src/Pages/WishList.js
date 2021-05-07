import {WishDisplay} from '../components/Wishlist/wishDisplay'

export const WishList = () => {
    return(
        <div>
            <h1 className="page-title" > <i> Items in WishList </i> </h1>
            <WishDisplay />
        </div>
    )
}