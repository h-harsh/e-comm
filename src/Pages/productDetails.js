import { Footer } from "../components/Footer/footer";
import { ProductDetailsCard } from "../components/Cards/productDetailsCard";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import "../../src/components/Footer/footer.style.css";
import "../App.css";
import { baseurl } from "../utils/apiCalls";
import Loader from "react-loader-spinner";

export const ProductDetails = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState([]);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    (async function () {
      const response = await axios.get(`${baseurl}/products/${productId}`);
      setProduct(response.data.currentProduct);
      setLoader(true);
    })();
  }, []);

  return (
    <div>
      {loader ? (
        <ProductDetailsCard product={product} />
      ) : (
        <div className="loader-prod">
          <Loader
            type="ThreeDots"
            color="black"
            height={100}
            width={100}
            timeout={3000} //3 secs
          />
        </div>
      )}
      {/* {loader ?   <ProductDetailsCard product={product} /> : <h1>Load hora hai</h1>} */}
      <Footer />
    </div>
  );
};
// export const ProductDetails = () => {
//   const { productId } = useParams();
//   const [product, setProduct] = useState([]);
//   const [loader, setLoader] = useState(false);

//   useEffect(() => {
//     (async function () {
//       const response = await axios.get(
//         "https://e-commerce-backend.harshporwal1.repl.co/products"
//       );
//       setProduct(response.data.products);
//       setLoader(true);
//     })();
//   }, []);

//   function getProductDetails(products, productId) {
//     console.log(productId)
//     return products.find((prod) => prod._id === productId);
//   }
//   const productFind = getProductDetails(product, productId);

//   return (
//     <div>
//       {loader ? (
//         <ProductDetailsCard product={productFind} />
//       ) : (
//         <div className="loader-prod" >
//           Loading....
//         </div>
//       )}
//       {/* {loader ?   <ProductDetailsCard product={product} /> : <h1>Load hora hai</h1>} */}
//       <Footer />
//     </div>
//   );
// };
