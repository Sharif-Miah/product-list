import { useContext } from "react";
import { ProductContext } from "../../context";
import Loading from "../Loading/Loading";
import ProductHeading from "./ProductHeading/ProductHeading";
import ProductList from "./ProductList/ProductList";
import ProductSearch from "./ProductSearch/ProductSearch";

const Product = () => {
  const { loading } = useContext(ProductContext);

  return (
    <div>
      <ProductHeading />
      <ProductSearch />
      {loading.state ? (
        <>
          <Loading />
        </>
      ) : (
        <>
          <ProductList />
        </>
      )}
    </div>
  );
};

export default Product;
