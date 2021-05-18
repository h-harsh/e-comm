import {WishDisplay} from '../components/Wishlist/wishDisplay'
import {Footer} from '../components/Footer/footer'

export const WishList = () => {
    return(
        <>
            <h1 className="page-title" > <i> Items in WishList </i> </h1>
            <WishDisplay />
            <Footer />
        </>
    )
}