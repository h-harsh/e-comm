import {WishDisplay} from '../components/Wishlist/wishDisplay'
import {Footer} from '../components/Footer/footer'

export const WishList = () => {
    return(
        <>
        <div style={{minHeight:"85vh"}}>
            <WishDisplay />
        </div>
            <Footer />
        </>
    )
}