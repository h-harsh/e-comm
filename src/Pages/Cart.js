import {CartDisplay} from '../components/Cart/cartDisplay'
import {Footer} from '../components/Footer/footer'

export const Cart = () => {
    return(
        <>
            <h1 className="page-title" ><i>Items in Cart </i> </h1>
            <CartDisplay />
            <Footer/>
        </>
    )
}