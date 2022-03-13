import { CartDisplay } from "../components/Cart/cartDisplay";
import { Footer } from "../components/Footer/footer";

export const Cart = () => {
  return (
    <>
      <div style={{ minHeight: "85vh" }} className="bg-color-light">
        <CartDisplay />
      </div>
      <Footer />
    </>
  );
};
