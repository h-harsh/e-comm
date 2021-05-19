import { Footer } from "../components/Footer/footer";
import { ProductDetailsCard } from "../components/Cards/productDetailsCard";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

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
    <>
      {loader ? (
        <ProductDetailsCard product={productFind} />
      ) : (
        <h1>Load hora hai</h1>
      )}
      {/* {loader ?   <ProductDetailsCard product={product} /> : <h1>Load hora hai</h1>} */}
      <Footer />
    </>
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
