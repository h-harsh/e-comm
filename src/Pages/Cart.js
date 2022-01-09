import { CartDisplay } from "../components/Cart/cartDisplay";
import { Footer } from "../components/Footer/footer";

export const Cart = () => {
  return (
    <>
      <div style={{ minHeight: "85vh" }}>
        <CartDisplay />
      </div>
      <Footer />
    </>
  );
};
