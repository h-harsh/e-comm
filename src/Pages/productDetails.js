import { Footer } from "../components/Footer/footer";
import { ProductDetailsCard } from "../components/Cards/productDetailsCard";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import '../../src/components/Footer/footer.style.css'
import '../App.css'

export const ProductDetails = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState([]);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    (async function () {
      const response = await axios.get(
        "https://e-commerce-backend.harshporwal1.repl.co/products"
      );
      setProduct(response.data.products);
      setLoader(true);
    })();
  }, []);

  function getProductDetails(products, productId) {
    return products.find((prod) => prod._id === productId);
  }
  const productFind = getProductDetails(product, productId);

  return (
    <div>
      {loader ? (
        <ProductDetailsCard product={productFind} />
      ) : (
        <div className="loader-prod" >
          Loading....
        </div>
      )}
      {/* {loader ?   <ProductDetailsCard product={product} /> : <h1>Load hora hai</h1>} */}
      <Footer />
    </div>
  );
};

// axios
//       .get("https://e-commerce-backend.harshporwal1.repl.co/products")
//       .then((response) => setData(response.data.products))
//       .then(setLoader(false))

// function getProductDetails(products, productId) {
//   return products.find((prod) => prod._id === productId);
// }
// setProduct(getProductDetails(products, productId));
